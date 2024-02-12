import {
  Bind,
  Controller,
  Delete,
  Get,
  HttpCode, Param,
  Post,
  Put,
  Redirect
} from "@nestjs/common";

@Controller('user')
export class UserController {
  @Get()
  searchUsers() {
    return '用户列表';
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
