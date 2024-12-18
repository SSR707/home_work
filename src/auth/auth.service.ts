import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { loginUserDto } from './dto/login-auth.dto';
import { verifytoken } from 'src/interface/interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPOSITORY') private readonly authReposiyory: any,
  ) {}
  register(createAuthDto: CreateUserDto) {
    return this.authReposiyory.register(createAuthDto);
  }

  login(loginAuthDto: loginUserDto) {
    return this.authReposiyory.login(loginAuthDto);
  }

  VerifyToken(otpData:verifytoken) {
    return this.authReposiyory.verifytoken(otpData);
  }
}
