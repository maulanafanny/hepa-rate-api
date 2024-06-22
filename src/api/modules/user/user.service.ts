import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserDao } from '@core/common/database/entities/user/user.dao'
import { UserEntity } from '@core/common/database/entities/user/user.entity'

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userDao.getAll()
  }

  async findOne(id: number): Promise<UserEntity> {
    return (await this.userDao.getOneById(id, [
      'id',
      'name',
      'email',
      'createdAt',
      'updatedAt',
    ])) as UserEntity
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
