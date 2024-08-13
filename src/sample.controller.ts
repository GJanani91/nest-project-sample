import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/sample')
export class SampleController {
  constructor(private readonly appService: AppService) {}

  @Get('/data')
  getHello(): string {
    return this.appService.getSampleHello();
  }
}
