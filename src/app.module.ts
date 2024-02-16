import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [CoreModule, TaskModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
