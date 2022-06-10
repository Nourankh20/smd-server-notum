import { IsEmail, IsNotEmpty, IsNumber, isPhoneNumber , } from 'class-validator';

export class UserDto {

  @IsNotEmpty()
  userName!: string;
 
  @IsNumber()
  userId!: number;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  password!: string;


  @IsNotEmpty()
  faculty!: string;


}