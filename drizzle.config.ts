import 'dotenv/config'
import { Config, defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: `${__dirname}/../src/core/common/database/entities/**/*.entity.ts`,
  out: './supabase/migrations',
  verbose: true,
  dialect: 'postgresql',
  schemaFilter: process.env.DB_SCHEMA_NAME,
  dbCredentials: { url: process.env.DB_URL },
} satisfies Config)
