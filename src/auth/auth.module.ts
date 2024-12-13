import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserSchema } from 'src/model/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema}]),
    JwtModule.register({})
  ],
  controllers: [AuthController],
  providers: [AuthService, {
    provide:"AUTH_REPO",
    useClass: AuthRepository
  }],
})
export class AuthModule {}
