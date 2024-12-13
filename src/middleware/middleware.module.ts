import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
          secret: process.env.JWT_ACCESS_SECRET,
          signOptions: { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN},
        }),
      ],
      providers: [AuthGuard],
      exports: [AuthGuard], 
})
export class MiddlewareModule {}
