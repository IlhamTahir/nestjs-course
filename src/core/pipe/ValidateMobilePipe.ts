import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateMobilePipe implements PipeTransform<string, string> {
  transform(value: string): any {
    if (value.length !== 11) {
      throw new HttpException('非法手机号码', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
