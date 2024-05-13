import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';

@Controller('auth')
export class AuthController {
  
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  validateUser(@Body() userData: LoginDto) {
    return this.authService.validateUser(userData);
  }
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
