import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';
import { MailerModule } from 'src/email/sendMail';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/repository/UserRepository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_SECRET,
      signOptions: { expiresIn: process.env.ACCESS_EXPIRES_IN },
    }),
  ],

  controllers: [AuthController],
  providers: [
    MailerModule,
    AuthService,

    {
      provide: 'AUTH_REPO',
      useClass: AuthRepository,
    },
  ],
  exports: [],
})
export class AuthModule {}
