import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import cors from 'cors';
import { loggerMiddleware } from './core/middleware/logger.middleware';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter/HttpExceptionFilter';
import { ValidationPipe } from './core/pipe/ValidationPipe';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware, cors).forRoutes('*');
  }
}
