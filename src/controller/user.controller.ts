import {
  Controller,
  Delete,
  Get,
  HostParam,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller({ path: 'users', host: ':nickname.abb.com' })
export class UserController {
  @Get()
  searchUsers(@HostParam('nickname') nickname: string) {
    return '用户列表' + nickname;
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `当前用户ID为${id}`;
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
