import { Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Course, CourseDocument, PostDocument, User, UserDocument } from "../../schemas/index";
import { Model } from "mongoose";
// // import { AuthDto } from "../auth/dtos/auth.dto";
// import { PostsDto } from "./dto/posts.dto";
import { CourseDto } from "./dto/course.dto";
import { PostService } from "../posts/post.service";

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    // private postService:PostService
  ) {}

  findAllByFaculty(faculty:string) {
    return this.courseModel.find({ faculty: faculty }).exec();
  }

  async createCourse(dto:CourseDto) {
    const newCourse = new this.courseModel(dto);
    return newCourse.save();
  }

  

}