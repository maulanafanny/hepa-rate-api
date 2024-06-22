import * as userSchema from '@core/common/database/entities/user/user.entity'
import * as articleSchema from '@core/common/database/entities/article/article.entity'

export const EntitiesSchema = { ...userSchema, ...articleSchema }
