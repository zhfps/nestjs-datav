import { Controller, Get, Param } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjcetService } from 'src/service/bi.project.service'

@ApiTags('项目')
@Controller('project/')
export class BiProjectController {
  constructor(private readonly projectService: BiProjcetService) {}

  @Get('list')
  @ApiResponse({ status: 200, type: BiProject, isArray: true })
  getList(): Promise<Array<BiProject>> {
    return this.projectService.list()
  }

  @Get('get:id')
  @ApiResponse({ status: 200, type: BiProject })
  getUser(@Param('id') id:string): Promise<BiProject> {
    return this.projectService.getById(id)
  }
}
