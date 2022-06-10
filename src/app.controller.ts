import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

type item = {
  id: string;
  stock: number;
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }




  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}