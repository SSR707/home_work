import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerAuthDto } from './dto/register-auth.dto';
import { loginAuthDto } from './dto/login-auth.dto';
import { Public } from 'src/decorator/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() registerAuthDto: registerAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @Public()
  @Post('login')
  login(@Body() loginAuthDto: loginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Public()
  @Post('verification')
  verificaton(@Body() loginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
