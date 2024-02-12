import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
