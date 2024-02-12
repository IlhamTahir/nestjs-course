import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('hello')
  getHello(): string {
    return '你好';
  }
}
