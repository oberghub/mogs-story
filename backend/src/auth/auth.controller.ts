import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const user = { userName: req.body.userName, email: req.body.email }
    const access_token = await this.authService.login(user);
    // res.cookie('access_token', access_token, {
    //   httpOnly: true,
    // })
    return access_token;
  }
}
