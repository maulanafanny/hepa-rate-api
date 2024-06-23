import * as userSchema from '../entities/user/user.entity'
import * as articleSchema from '../entities/article/article.entity'

export const EntitiesSchema = { ...userSchema, ...articleSchema }
