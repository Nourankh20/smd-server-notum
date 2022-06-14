import { Controller, Get, Request, UseGuards,Post, Body,Param } from '@nestjs/common';
// import { UserDto } from './dto/user.dto';
import { PostsDto } from './dto/posts.dto';
// import { UserService } from './user.service';
import { PostService } from './post.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}
  

  
  @Get('/rank/:courseid')
  rank(@Param('courseid') courseid:string) {
    return this.postService.rank(courseid);
  }

  
  @Get('/:courseid')
  posts(@Param('courseid') courseid:string) {
    return this.postService.findAllByCourse(courseid);
  }

  @Post('/likes/:id')
  likes(@Param('id') id:number) {
    return this.postService.addLike(id);
  }


  
  @Post('/downloads/:id')
  downloads(@Param('id') id:number) {
    return this.postService.addDownload(id);
  }


  @Post('/post')
  addPost(@Body()dto:PostsDto) {
    // console.log('dto', dto)
    // return 6;
    return this.postService.createPost(dto);
  }

  

  
  
}