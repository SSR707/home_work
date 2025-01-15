import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { EmailModule } from 'src/email/email.module';
import { CustomJwtModule } from 'src/common/custom-jwt/custom-jwt.module';
import { Otp } from './entities/otp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Otp]),
    EmailModule,
    CustomJwtModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
