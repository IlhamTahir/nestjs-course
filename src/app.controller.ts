import { Bind, Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('app')
export class AppController {
  @Get('hello')
  @Bind(Req())
  getHello(request: Request) {
    return request.headers;
  }
}
