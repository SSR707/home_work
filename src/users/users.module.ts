import { Module } from '@nestjs/common';
import { Users, UsersSchema } from 'src/model/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
