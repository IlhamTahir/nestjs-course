import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('拒绝请求', HttpStatus.FORBIDDEN);
  }
}
