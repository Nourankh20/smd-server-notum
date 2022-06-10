import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./../../schemas/index";
import { Model } from "mongoose";
import { UserDto } from "./dto/user.dto";
// import { AuthDto } from "../auth/dtos/auth.dto";

type login = {
  userid:number,
  password:string
} 

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  
  ) {}


  async login(user:login) {
    const user_ = await this.userModel.findOne({ userId: user.userid, password: user.password }).exec();
    if( user_) {
      return true;
    }
    return false;
  }

  /**
   * Returns all users from mongo database
   */
  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  /**
   * Creates a user in the mongo database
   * @param {UserDto} dto checks that the user filled the register
   * @return {User} the created user object
   */
  async createUser(dto: UserDto): Promise<User> {
    const newUser = new this.userModel(dto);
    return newUser.save();
  }

  /**
   * Gets user by id from the mongo database
   * @param userId the id of the user to find
   * @return user object
   */
  async findUserbyId(Id: string): Promise<any> {
    return await this.userModel.findOne({ userId: Number(Id) }).exec();
  }

  /**
   * Gets user by email from the mongo database
   * @param userEmail the email of the user to find
   * @return user object
   */
  async findUserbyEmail(userEmail: string): Promise<any> {
    return await this.userModel.findOne({ email: userEmail }).exec();
  }
}