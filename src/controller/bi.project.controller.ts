import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { BiComponent } from 'src/entitys/bi.compoment.entity'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjectFilter } from 'src/entitys/bi.project.filter.entity'
import { BiProjectGroup } from 'src/entitys/bi.project.group.entity'
import { BiProjectGroupDto } from 'src/entitys/dtos/project.dto'
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

  @Get('component/list')
  @ApiResponse({ status: 200, type: BiComponent, isArray: true })
  getComponentList(): Promise<Array<BiComponent>> {
    return this.projectService.compomentList()
  }

  @Get('filter/list')
  @ApiResponse({ status: 200, type: BiProjectFilter, isArray: true })
  getFilterList(): Promise<Array<BiProjectFilter>> {
    return this.projectService.filterList()
  }

  @Get('group/list')
  @ApiResponse({ status: 200, type: BiProjectGroupDto, isArray: true })
  getGroupList(): Promise<Array<BiProjectGroupDto>> {
    return this.projectService.groupList()
  }

  @Post('group/create')
  @ApiResponse({ status: 200, type: BiProjectGroup })
  createGroupList(@Body() data: { name: string; }): Promise<BiProjectGroup> {
    console.log(data)
    return this.projectService.insertGroup(data.name)
  }
}
