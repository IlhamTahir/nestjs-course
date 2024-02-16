import { Global, Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Global()
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class CoreModule {}
