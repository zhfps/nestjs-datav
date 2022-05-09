import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BiProjectController } from 'src/controller/bi.project.controller'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjcetService } from 'src/service/bi.project.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([BiProject])
  ],
  controllers: [
    BiProjectController
  ],
  providers: [
    BiProjcetService
  ],
  exports: [
    BiProjcetService
  ]
})
export class BiProjcetModule { }
