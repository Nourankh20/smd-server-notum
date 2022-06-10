import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '../../schemas/index';
import { PostsController } from './posts.controller';
import { PostService } from './post.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])
],
  exports: [PostService],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}