import { Module } from '@nestjs/common';
import { Users, UsersSchema } from 'src/model/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }])],
    controllers: [AuthController],
    providers:[AuthService]
})

export class AuthModule {}
