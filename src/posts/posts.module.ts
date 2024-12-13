import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Postschema } from 'src/model/posts.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'posts', schema: Postschema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
