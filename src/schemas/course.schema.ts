import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {

  @Prop({ required: true })
  faculty: string 

  @Prop({ required: true })
  name: string 
  
  @Prop({ required: true })
  code: number

}
export const CourseSchema = SchemaFactory.createForClass(Course);