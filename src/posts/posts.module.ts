import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/model/user.model';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'users', schema: UserSchema}])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
