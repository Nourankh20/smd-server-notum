import { Controller, Get, Request, UseGuards,Post, Body,Param } from '@nestjs/common';
// import { UserDto } from './dto/user.dto';
import { CourseDto } from './dto/course.dto';
import { CourseService } from './course.service';

// import { UserService } from './user.service';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}


  @Get('/:faculty')
  getCourse(@Param('faculty') faculty:string){
    return this.courseService.findAllByFaculty(faculty);
  }


  @Post('/create')
  createCourse(dto:CourseDto){
    return this.courseService.createCourse(dto);
  }

  
  
}