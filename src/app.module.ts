import { Module } from '@nestjs/common'
import { CommonModule } from './module/common.module'
import { UserModule } from './module/user.module'
@Module({
  imports: [
    CommonModule,
    UserModule
  ]
})
export class AppModule {}
