import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AjaxTransformInterceptor } from 'src/interceptors/ajax.transform.interceptor'
import { BiComponent } from 'src/entitys/bi.compoment.entity'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjectFilter } from 'src/entitys/bi.project.filter.entity'
import { BiProjectGroup } from 'src/entitys/bi.project.group.entity'
/**
 * 公共模块
 */
@Global()
@Module({
  imports: [
    /* 连接mysql数据库 */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'data_v',
      entities: [BiProject, BiComponent, BiProjectFilter, BiProjectGroup],
      synchronize: false,
      autoLoadEntities: true
    })
  ],
  providers: [
    /* 全局返回值转化拦截器 */
    {
      provide: APP_INTERCEPTOR,
      useClass: AjaxTransformInterceptor
    }
  ]
})
export class CommonModule {

}
