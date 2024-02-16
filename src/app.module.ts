import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { loggerMiddleware } from './core/middleware/logger.middleware';
import { UserController } from './core/controller/user.controller';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(loggerMiddleware)
      .exclude({ path: '/users/*', method: RequestMethod.GET })
      .forRoutes(UserController);
  }
}
