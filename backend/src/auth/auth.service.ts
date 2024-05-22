import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.userService.findByUserName(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log(user)
      return {
        username: user.userName,
      };
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
