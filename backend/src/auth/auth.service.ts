import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ){}

  async validateUser(userData: LoginDto) {
    const user = await this.userService.findByUserName(userData.userName);
    const currentUserPassword = user.password;
    const inputUserPassword = userData.password;
    if (await bcrypt.compare(inputUserPassword, currentUserPassword)) {
      const payload = { userName: user.userName, email: user.email }
      const token = await this.jwtService.signAsync(payload)
      return { access_token: token };
    } else {
      throw new UnauthorizedException();
    }
  }
}
