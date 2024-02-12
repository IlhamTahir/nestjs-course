import {
  Body,
  Controller,
  Delete,
  Get,
  HostParam,
  Param,
  Post,
  Put,
  Query
} from "@nestjs/common";
import { UserCreateDto } from "../dto/user-create.dto";

@Controller('user')
export class UserController {
  @Get()
  async searchUsers() {
    return '用户列表';
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `当前用户ID为${id}`;
  }

  @Post()
  createUser(@Body() userCreateDto: UserCreateDto) {
    return userCreateDto;
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
