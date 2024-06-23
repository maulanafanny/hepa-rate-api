import { Inject } from '@nestjs/common'
import { eq, Table } from 'drizzle-orm'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '../config/database.config'
import { PG_CONNECTION } from '../drizzle/pg-connection'
import { useDynamicSchema } from '../entities/helpers/use-dynamic-schema'

export class AbstractDao<
  TSchema extends Record<string, unknown>,
  Entity extends Table,
  InferEntitySelected,
  InferEntityInsert,
> {
  constructor(
    @Inject(PG_CONNECTION) protected readonly db: PostgresJsDatabase<TSchema>,
    private readonly entity: Entity,
    protected readonly dbConfig: DatabaseConfig,
  ) {}

  protected get useSchema() {
    return useDynamicSchema(this.entity, this.dbConfig.schemaName)
  }

  async getAll(queryBuilder?: (query) => void) {
    const query = this.db.select().from(this.useSchema)

    if (queryBuilder) {
      queryBuilder(query)
    }

    return await query.execute()
  }

  async getById(
    id: number,
    fieldsToSelect?: (keyof Entity)[],
    queryBuilder?: (query) => void,
  ): Promise<Partial<InferEntitySelected>[]> {
    const selectedFields = this.selectFields(fieldsToSelect)

    const query = this.db.select(selectedFields).from(this.useSchema)

    if (queryBuilder) {
      queryBuilder(query)
    }

    return query.where(eq(this.entity['id'], id))
  }

  async getOneById(id: number, fieldsToSelect?: (keyof Entity)[], queryBuilder?: (query) => void) {
    const query = this.db.select().from(this.useSchema)

    if (queryBuilder) {
      queryBuilder(query)
    }

    const res = await query.where(eq(this.entity['id'], id)).execute()

    return res && res.length > 0 ? res[0] : null
  }

  async getBySingleKey(
    key: keyof Entity,
    value: any,
    fieldsToSelect?: (keyof Entity)[],
  ): Promise<Partial<InferEntitySelected>[]> {
    const selectedFields = this.selectFields(fieldsToSelect)
    return await this.db
      .select(selectedFields)
      .from(this.useSchema)
      .where(eq(this.entity[key as string], value))
      .execute()
  }

  async getOneBySingleKey(
    key: keyof Entity,
    value: any,
    fieldsToSelect?: (keyof Entity)[],
  ): Promise<Partial<InferEntitySelected>> {
    const bySingleKey = await this.getBySingleKey(key, value, fieldsToSelect)
    return bySingleKey && bySingleKey.length > 0 ? bySingleKey.at(-1) : null
  }

  async insertNewRecord(entity: Partial<InferEntityInsert>): Promise<Partial<InferEntitySelected>> {
    const insertedRows = await this.db
      .insert(this.useSchema)
      .values(entity as InferEntityInsert)
      .returning()
      .execute()
    return Array.isArray(insertedRows) && insertedRows.length === 1
      ? (insertedRows.at(-1) as Partial<InferEntitySelected>)
      : null
  }

  async deleteById(id: number) {
    return this.db.delete(this.useSchema).where(eq(this.entity['id'], id)).returning().execute()
  }

  async updateById(
    id: number,
    fieldsToUpdate: Partial<InferEntityInsert>,
  ): Promise<Partial<InferEntitySelected>[]> {
    return (await this.db
      .update(this.useSchema)
      .set(fieldsToUpdate as InferEntityInsert)
      .where(eq(this.entity['id'], id))
      .returning()
      .execute()) as Partial<InferEntitySelected>[]
  }

  async deleteAll() {
    return this.db.delete(this.useSchema).returning().execute()
  }

  private selectFields(fieldsToSelect?: (keyof Entity)[]) {
    if (!fieldsToSelect) {
      return undefined
    }
    return fieldsToSelect.reduce((acc, fieldToSelect) => {
      acc[fieldToSelect as string] = this.entity[fieldToSelect]
      return acc
    }, {})
  }
}
