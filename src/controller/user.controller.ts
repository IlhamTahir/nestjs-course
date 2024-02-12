import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('user*a')
  getUsers(): string {
    return '列表用户';
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
