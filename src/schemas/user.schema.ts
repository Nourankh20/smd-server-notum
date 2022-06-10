import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({ required: true })
  userName: string | undefined;

  
  @Prop({ required: true })
  userId: Number | undefined;

  @Prop({ required: true })
  email: string | undefined;

  @Prop({ required: true })
  password: string | undefined;

  @Prop({ required: true })
  faculty: string | undefined;

}
export const UserSchema = SchemaFactory.createForClass(User);