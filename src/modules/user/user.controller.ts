import { Controller, Get, Request, UseGuards,Post, Body,Param } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

type login = {
  userid:number,
  password:string
}

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  /**
   * API endpoint handler returns the authenticated user from JWT payload
   */
  
  @Get()
  user(@Request() req: any): any {
    return req.user;
  }

  /**
   * API endpoint handler returns all users from mongo database
   */
  
  @Get('/list')
  users(): any {
    return this.userService.findAll();
  }

  /**
   * API endpoint handler for creating a user
   * @param {UserDto} dto checks that the user filled the register 
   * @return created user
   */ 
  
  @Post('/register')
    async register(@Body() dto:UserDto):Promise<any>{
    console.log('Entered post');
      const id_exists=(await this.userService.findUserbyId(dto.userId.toString()))!=null?true:false;

      if(id_exists){
        throw 400;
      }

      return this.userService.createUser(dto);
      
  }

  @Get('/login')
  login(user:login){
    // return  ""+ userid +","+ password ;
    return this.userService.login(user);
  }

  
  
}