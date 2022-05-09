import { Module } from '@nestjs/common'
import { BiProjcetModule } from './module/bi.projcet.module'
import { CommonModule } from './module/common.module'
import { UserModule } from './module/user.module'
@Module({
  imports: [
    CommonModule,
    UserModule,
    BiProjcetModule
  ]
})
export class AppModule {}
