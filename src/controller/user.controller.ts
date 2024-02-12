import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  @Redirect('https://baidu.com', 301)
  getUsers() {
    return {
      url: 'https://qq.com',
    };
  }

  @Post()
  createUser(): string {
    return '创建用户';
  }

  @Put()
  updateUser(): string {
    return '更新用户';
  }

  @Delete()
  deleteUser(): string {
    return '删除用户';
  }
}
