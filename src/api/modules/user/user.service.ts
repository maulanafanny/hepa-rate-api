import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserDao } from '../../../core/common/database/entities/user/user.dao'
import { UserEntity } from '../../../core/common/database/entities/user/user.entity'

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userDao.getAll()
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return (await this.userDao.getOneBySingleKey('email', email, [
      'id',
      'name',
      'email',
      'password'
    ])) as UserEntity
  }

  async findOne(id: number): Promise<UserEntity> {
    return (await this.userDao.getOneBySingleKey('id', id, [
      'id',
      'name',
      'email',
    ])) as UserEntity
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
