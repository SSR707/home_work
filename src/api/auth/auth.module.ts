import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/entity/user.entity';
import { OtpEntity } from 'src/core/entity/otp.entity';
import { EmailService } from 'src/infrastructure/lib/email/email.service';
import { CustomJwtService } from 'src/infrastructure/lib/custom-jwt/custom-jwt.service';
import { ConfigService } from '@nestjs/config';
import { CustomJwtModule } from 'src/infrastructure/lib/custom-jwt/custom-jwt.module';
import { EmailModule } from 'src/infrastructure/lib/email/email.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, OtpEntity]),
    CustomJwtModule,
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
