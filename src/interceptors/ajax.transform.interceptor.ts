import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AjaxResult } from 'src/common/ajax.result'
/**
 * 接口数据转换
 */
@Injectable()
export class AjaxTransformInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map(data => {
          const keep = this.reflector.getAllAndOverride<boolean>(
            'common:keep',
            [
              context.getHandler(),
              context.getClass()
            ]
          )
          if (keep) return data
          const response = context.switchToHttp().getResponse()
          response.header('Content-Type', 'application/json; charset=utf-8')
          return AjaxResult.success(data)
        })
      )
  }
}
