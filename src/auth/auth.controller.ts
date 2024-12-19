import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { loginUserDto } from './dto/login-auth.dto';
import { Public } from 'src/decorator/decorators';
import { forgetPass, verifytoken } from 'src/interface/interface';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() createAuthDto: CreateUserDto) {
    return this.authService.register(createAuthDto);
  }

  @Public()
  @Post('login')
  login(@Body() updateAuthDto: loginUserDto) {
    return this.authService.login(updateAuthDto);
  }

  @Public()
  @Post('verifyToken')
  verifyToken(@Body() otpData: verifytoken) {
    return this.authService.VerifyToken(otpData);
  }

  @Post('forgetPassword')
  forgetPassword(@Body() forgetPass: forgetPass , @Req() req: Request) {
    return this.authService.forgetPassword(req['user'].id , forgetPass);
  }
}
