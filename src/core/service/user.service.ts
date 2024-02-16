import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async searchUsers() {
    throw new Error();
    return [];
  }

  async getUser(id: string) {
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
