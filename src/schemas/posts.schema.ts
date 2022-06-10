import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {

  @Prop({ required: true })
  _id: number ;

  @Prop({ required: true })
  userid: number ;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  no_likes: number;

  @Prop({ required: true })
  no_downloads:number;

  @Prop({ required: true })
  timing: string ;

  @Prop({ required: true })
  courseid: string ;

}
export const PostSchema = SchemaFactory.createForClass(Post);