import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './../../schemas/index';
import { Model } from 'mongoose';
// // import { AuthDto } from "../auth/dtos/auth.dto";
import { PostsDto } from './dto/posts.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

    findAllByCourse(courseid:number) {
      return this.postModel.find({ courseid : courseid }).exec();
    }

 
  async createPost(dto: PostsDto) {
    const newPost = new this.postModel(dto);
    return newPost.save();
  }


  async addLike(id: number): Promise<any> {
    let post = await this.postModel.findOne({ _id: id }).exec();
    if (post) {
      await this.postModel
        .updateOne(
          { _id: id },
          {
            $set: {
              no_likes: (post.no_likes + 1),
            },
          },
          { upsert: true },
        )
        .exec();
    }
  }


  async addDownload(id: number) {
    let post = await this.postModel.findOne({ _id: id }).exec();
    if (post) {
      return await this.postModel
        .updateOne(
          { _id: id },
          {
            $set: {
              no_downloads: (post.no_downloads + 1),
            },
          },
          { upsert: true },
        )
        .exec();
    }
    return 'failed';
  }

}
