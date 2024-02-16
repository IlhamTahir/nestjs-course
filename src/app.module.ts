import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from './core/middleware/logger.middleware';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/user*', method: RequestMethod.GET });
  }
}
