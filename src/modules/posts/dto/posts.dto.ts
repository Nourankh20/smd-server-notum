import { IsEmail, IsNotEmpty, IsNumber, isPhoneNumber , } from 'class-validator';

export class PostsDto {

  @IsNumber()
  _id!: number;
 
  @IsNumber()
  userid!: number;

  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  no_likes!: number;

  
  @IsNotEmpty()
  no_downloads!: number;

  @IsNotEmpty()
  timing!: string;

  
  @IsNotEmpty()
  courseid!: string;


}