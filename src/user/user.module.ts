import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'USER_REPOSITORIY',
      useClass: UserRepository,
    },
  ],
  exports:[]
})
export class UserModule {}
