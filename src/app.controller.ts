import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create')
  async createUser() {
    return await this.appService.createUser();
  }
  @Post('/delete')
  async deleteUser(@Body() data: any) {
    return await this.appService.deleteUser(data);
  }
}
