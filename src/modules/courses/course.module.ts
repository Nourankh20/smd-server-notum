import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from '../../schemas/index';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])
//   ,TransactionModule,AccountsModule
],
  exports: [CourseService],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}