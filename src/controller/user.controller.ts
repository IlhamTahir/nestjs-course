import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  @Get()
  async searchUsers(): Promise<UserDto[]> {
    return [];
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDto> {
    // 根据id 拿用户信息，然后返回这个用户。
    return Promise.resolve({
      id,
      username: '依力',
      age: 33,
      gender: '男',
      createTime: '2021-08-09 00:00:00',
      updateTime: '2021-08-09 00:00:00',
    });
  }

  @Post()
  createUser(@Body() userCreateDto: UserCreateDto) {
    return userCreateDto;
  }

  @Put(':id')
  updateUser(@Param('id') id: string): Promise<UserDto> {
    return Promise.resolve({
      id,
      username: '依力',
      age: 33,
      gender: '男',
      createTime: '2021-08-09 00:00:00',
      updateTime: '2021-08-09 00:00:00',
    });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    console.log(id);
  }
}
