import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Public } from 'src/decorator/decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }
  @Public()
  @Post()
  login(@Body() loginAuthDto: UpdateAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Public()
  @Post()
  verifyToken(@Body() data: any){
    return this.authService.varifyOtp(data);
  }
}
