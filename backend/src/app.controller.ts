import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string { 
    return "";
  }
  
  @Get()
  findOne(): string {
    return ""
  }
  
  @Post()
  create(): string {
    return ""
  }

  @Patch()
  update(): string {
    return ""
  }

  @Delete()
  delete(): string {
    return ""
  }
}
