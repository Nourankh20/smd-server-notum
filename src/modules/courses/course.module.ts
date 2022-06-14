import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema, PostSchema, User, UserSchema } from '../../schemas/index';
import { PostService } from '../posts/post.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema },{ name: Post.name, schema: PostSchema },{ name: User.name, schema: UserSchema }])
//   ,TransactionModule,AccountsModule
],
  exports: [CourseService],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}