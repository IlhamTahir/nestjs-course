import { IsInt, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString({ message: '用户名必须是字符串' })
  username: string;

  @IsInt({ message: '年龄必须是整数' })
  age: number;

  @IsString({ message: '性别必须是字符串' })
  gender: string;
}
