import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CoreModule],
  exports: [CoreModule],
})
export class TaskModule {}
