import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserSchema } from 'src/user/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'users' , schema:UserSchema}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
