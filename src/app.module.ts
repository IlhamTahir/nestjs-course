import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import cors from 'cors';
import { loggerMiddleware } from './core/middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter/HttpExceptionFilter';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware, cors).forRoutes('*');
  }
}
