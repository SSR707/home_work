import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/UserRepository';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide:'USER_REPO',
    useClass:UserRepository
  }],
})
export class UserModule {}
