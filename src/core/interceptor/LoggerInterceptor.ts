import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // 请求前
    console.log('请求前');
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        // 请求之后
        console.log(`请求完成, 时间 ${Date.now() - now}ms`);
      }),
    );
  }
}
