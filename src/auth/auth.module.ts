import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';

@Module({
  imports: [JwtModule.register({      
    global:true,
    secret: process.env.ACCESS_SECRET,
    signOptions: { expiresIn: process.env.ACCESS_EXPIRES_IN }, })],
  controllers: [AuthController],
  providers: [AuthService, {
    provide:'AUTH_REPO',
    useClass: AuthRepository
  }],
})
export class AuthModule {}
