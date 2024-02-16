import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { Constructor } from '@nestjs/common/utils/merge-with-values.util';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      for (const key in errors[0].constraints) {
        throw new BadRequestException(errors[0].constraints[key]);
      }
    }
    return undefined;
  }

  private toValidate(metatype: Constructor<any>): boolean {
    const types: Constructor<any>[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
