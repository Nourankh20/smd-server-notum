import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, isPhoneNumber , } from 'class-validator';

export class CourseDto {

  @IsNotEmpty()
  faculty!: string;

  @IsNotEmpty()
  name!: string;
 
  @IsNumber()
  code!: number;

 


}