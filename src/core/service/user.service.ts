import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async searchUsers() {
    return [];
  }

  async getUser(id: number) {
    return {
      id,
      username: '依力',
      age: 33,
      gender: '男',
      createTime: '2021-08-09 00:00:00',
      updateTime: '2021-08-09 00:00:00',
    };
  }
}
