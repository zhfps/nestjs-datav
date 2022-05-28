import { InjectRepository } from '@nestjs/typeorm'
import { BiComponent } from 'src/entitys/bi.compoment.entity'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjectFilter } from 'src/entitys/bi.project.filter.entity'
import { BiProjectGroup } from 'src/entitys/bi.project.group.entity'
import { BiProjectGroupDto, UpdateGroupDto } from 'src/entitys/dtos/project.dto'
import { DeleteResult, Repository } from 'typeorm'

export class BiProjcetService {
  constructor(
        @InjectRepository(BiProject)
        private readonly projectRepository: Repository<BiProject>,
        @InjectRepository(BiComponent)
        private readonly bicomponent: Repository<BiComponent>,
        @InjectRepository(BiProjectFilter)
        private readonly bifilter: Repository<BiProjectFilter>,
        @InjectRepository(BiProjectGroup)
        private readonly bigroup: Repository<BiProjectGroup>
  ) {

  }

  /**
   * 项目列表
   */
  async list():Promise<Array<BiProject>> {
    return this.projectRepository.query(`select * from bi_project order by createAt desc`)
  }

  /**
   *
   * @returns 获取指定项目
   */
  async findOne(id:string):Promise<BiProject> {
    return this.projectRepository.findOne({ where: [{ id }] })
  }

  /**
   * 更新项目
   * @param entity
   * @returns
   */
  async updateProjectName(entity: {id: string; name: string;}):Promise<BiProject> {
    const project = await this.projectRepository.findOne({ where: [{ id: entity.id }] })
    project.name = entity.name
    return this.projectRepository.save(project)
  }

  /**
   * 复制
   * @param entity
   * @returns
   */
  async copyProjct(id: string):Promise<BiProject> {
    const project = await this.projectRepository.findOne({ where: [{ id: id }] })
    delete project.id
    project.name = project.name + '_copy'
    const entity = this.projectRepository.create(project)
    return this.projectRepository.save(entity)
  }

  /**
   * 移动分组
   * @param id
   * @param groupId
   * @returns
   */
  async moveProject(id:string, groupId:string):Promise<BiProject> {
    const project = await this.projectRepository.findOne({ where: [{ id: id }] })
    project.groupId = groupId
    return this.projectRepository.save(project)
  }

  /**
   * 组件列表
   * @param id
   * @returns
   */
  async compomentList(id:string):Promise<Array<BiComponent>> {
    return this.bicomponent.find({ where: [{ 'projectId': id }] })
  }

  /**
   * 过滤器模板
   * @param id
   * @returns
   */
  async filterList(id:string):Promise<Array<BiProjectFilter>> {
    return this.bifilter.find({ where: [{ 'projectId': id }] })
  }

  /**
   * 所有分组
   * @returns
   */
  async groupList():Promise<Array<BiProjectGroupDto>> {
    return this.bigroup.query(`select a.id, a.name, count(b.id) as count from bi_project_group a left join bi_project b  on a.id = b.groupId group by a.id,a.name`)
  }

  /**
   * 创建组
   * @param name
   * @returns
   */
  async insertGroup(name: string):Promise<BiProjectGroup> {
    const group = this.bigroup.create({ name: name })
    return this.bigroup.save(group)
  }
  /**
   * 更新组
   * @param entity
   * @returns
   */
  async updateGroup(entity: UpdateGroupDto):Promise<BiProjectGroup> {
    const group = await this.bigroup.findOne({ where: [{ id: entity.id }] })
    group.name = entity.name
    return this.bigroup.save(entity)
  }

  async deleteGroup(id: string):Promise<DeleteResult> {
    const list = await this.projectRepository.find({ where: [{ groupId: id }] })
    if (list.length > 0) {
      throw new Error('该分组存在项目引用,请先清空项目')
    }
    return this.bigroup.delete(id)
  }
}
