import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from 'src/controller/user.controller'
import { User } from 'src/entitys/user.entity'
import { UserService } from 'src/service/user.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ],
  exports: [
    UserService
  ]
})
export class UserModule { }
