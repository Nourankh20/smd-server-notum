import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/user/user.module';
import { PostsModule } from './modules/posts/post.module';
import { CourseModule } from './modules/courses/course.module';
import { UserController } from './modules/user/user.controller';
import { PostsController } from './modules/posts/posts.controller';
import { CourseController } from './modules/courses/course.controller';
import { AppController } from './app.controller';
require('dotenv').config();


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO),
    UsersModule,
    PostsModule,
    CourseModule,
    
  ],
  controllers:[
    UserController,
    PostsController,
    CourseController,
    AppController
  ]
})
export class AppModule {}