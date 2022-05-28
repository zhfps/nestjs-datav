import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { BiComponent } from 'src/entitys/bi.compoment.entity'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjectFilter } from 'src/entitys/bi.project.filter.entity'
import { BiProjectGroup } from 'src/entitys/bi.project.group.entity'
import { BiProjectGroupDto, UpdateGroupDto } from 'src/entitys/dtos/project.dto'
import { BiProjcetService } from 'src/service/bi.project.service'
import { DeleteResult } from 'typeorm'

@ApiTags('项目')
@Controller('project/')
export class BiProjectController {
  constructor(private readonly projectService: BiProjcetService) {}

  @Get('list')
  @ApiResponse({ status: 200, type: BiProject, isArray: true })
  getList(): Promise<Array<BiProject>> {
    return this.projectService.list()
  }

  @Post('update/name')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: BiProject })
  updateProject(@Body() data: {id: string; name: string;}): Promise<BiProject> {
    return this.projectService.updateProjectName(data)
  }

  @Get('copy:id')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: BiProject })
  copyProject(@Param('id') id:string): Promise<BiProject> {
    return this.projectService.copyProjct(id)
  }

  @Get('get:id')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: BiProject })
  getUser(@Param('id') id:string): Promise<BiProject> {
    return this.projectService.findOne(id)
  }

  @Get('component/list/:id')
  @ApiResponse({ status: 200, type: BiComponent, isArray: true })
  getComponentList(@Param('id') id: string): Promise<Array<BiComponent>> {
    return this.projectService.compomentList(id)
  }

  @Get('filter/list/:id')
  @ApiResponse({ status: 200, type: BiProjectFilter, isArray: true })
  getFilterList(@Param('id') id: string): Promise<Array<BiProjectFilter>> {
    return this.projectService.filterList(id)
  }

  @Get('group/list')
  @ApiResponse({ status: 200, type: BiProjectGroupDto, isArray: true })
  getGroupList(): Promise<Array<BiProjectGroupDto>> {
    return this.projectService.groupList()
  }

  @Post('group/create')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: BiProjectGroup })
  createGroup(@Body() data: { name: string; }): Promise<BiProjectGroup> {
    console.log(data)
    return this.projectService.insertGroup(data.name)
  }

  @Post('group/update')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: BiProjectGroup })
  updateGroup(@Body() data: UpdateGroupDto): Promise<BiProjectGroup> {
    console.log(data)
    return this.projectService.updateGroup(data)
  }

  @Post('group/del:id')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: DeleteResult })
  removeGroup(@Param('id') id: string): Promise<DeleteResult> {
    return this.projectService.deleteGroup(id)
  }
}
