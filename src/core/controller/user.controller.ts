import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import { ValidateMobilePipe } from '../pipe/ValidateMobilePipe';
import { Role } from '../common/decorators';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;
  @Get()
  async searchUsers(): Promise<UserDto[]> {
    return this.userService.searchUsers();
  }

  @Get(':id')
  @Role('admin')
  getUser(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<UserDto> {
    // 根据id 拿用户信息，然后返回这个用户。
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() userCreateDto: UserCreateDto) {
    return userCreateDto;
  }

  @Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return Promise.resolve({
      id,
      username: '依力',
      age: 33,
      gender: '男',
      createTime: '2021-08-09 00:00:00',
      updateTime: '2021-08-09 00:00:00',
    });
  }

  @Put(':id/modifyMobile')
  modifyMobile(
    @Param('id', ParseIntPipe) id: number,
    @Body('mobile', ValidateMobilePipe) mobile: string,
  ) {
    return {
      id,
      mobile,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    console.log(id);
  }
}
