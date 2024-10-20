import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/auth.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async login({ email, password }: LoginDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(email)

    if (user?.password !== password) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.id }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
