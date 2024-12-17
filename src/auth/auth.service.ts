import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPO') private readonly authRepository: any,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const currentUser = await this.authRepository.current(createAuthDto.email)
    if(!currentUser){
      throw new HttpException('UNAUTHORIZED' , HttpStatus.UNAUTHORIZED)
    }
    createAuthDto.password = await this.authRepository.hashPass(createAuthDto.password)
    await SendMi
    return 
  }
  login(createAuthDto: CreateAuthDto) {
    return 
  }
}
