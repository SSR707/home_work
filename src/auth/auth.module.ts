import { Module } from '@nestjs/common';
import { Users, UsersSchema } from 'src/model/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthReposetoriy } from './auth.reposetoriy';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
    JwtModule.register({})],
    controllers: [AuthController],
    providers:[AuthService,{
        provide: 'AUTH_REPOSITORY',
        useClass: AuthReposetoriy,
      },]
})

export class AuthModule {}
