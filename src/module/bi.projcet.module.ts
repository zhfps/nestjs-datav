import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BiProjectController } from 'src/controller/bi.project.controller'
import { BiComponent } from 'src/entitys/bi.compoment.entity'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjectFilter } from 'src/entitys/bi.project.filter.entity'
import { BiProjectGroup } from 'src/entitys/bi.project.group.entity'
import { BiProjcetService } from 'src/service/bi.project.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([BiProject, BiComponent, BiProjectFilter, BiProjectGroup])
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
