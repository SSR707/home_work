import { Body, Post, Controller, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { AuthService } from './auth.service';
import { UpdateUserDto } from './dto/update-auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    try {
      const data = await this.authService.registerService(userData);
      return data
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Post('login')
  async login(@Body() userData: UpdateUserDto) {
    try {
      const data = await this.authService.loginService(userData);
      return data;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Post('UpdatePasswordDto')
  async updatePass(@Body() userData: UpdateUserDto) {
    try{
      const data = await this.authService.loginService(userData);
      return data;
    }catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }
}
