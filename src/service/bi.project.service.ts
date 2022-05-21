import { InjectRepository } from '@nestjs/typeorm'
import { BiComponent } from 'src/entitys/bi.compoment.entity'
import { BiProject } from 'src/entitys/bi.project.entity'
import { BiProjectFilter } from 'src/entitys/bi.project.filter.entity'
import { BiProjectGroup } from 'src/entitys/bi.project.group.entity'
import { BiProjectGroupDto, UpdateGroupDto } from 'src/entitys/dtos/project.dto'
import { Repository } from 'typeorm'

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

  async list():Promise<Array<BiProject>> {
    return this.projectRepository.query(`select * from bi_project order by createAt desc`)
  }

  async getById(id: string):Promise<BiProject> {
    return this.projectRepository.query(`select * from bi_project where id = ${id}`)
  }

  async compomentList():Promise<Array<BiComponent>> {
    return this.bicomponent.query(`select * from bi_project_component order by createAt desc`)
  }

  async filterList():Promise<Array<BiProjectFilter>> {
    return this.bifilter.query(`select * from bi_project_filter order by createAt desc`)
  }

  async groupList():Promise<Array<BiProjectGroupDto>> {
    return this.bigroup.query(`select a.id, a.name, count(b.id) as count from bi_project_group a left join bi_project b  on a.id = b.groupId group by a.id,a.name`)
  }

  async insertGroup(name: string):Promise<BiProjectGroup> {
    const group = this.bigroup.create({ name: name })
    return this.bigroup.save(group)
  }
  async updateGroup(entity: UpdateGroupDto):Promise<BiProjectGroup> {
    const group = await this.bigroup.findOne({ where: [{ id: entity.id }] })
    group.name = entity.name
    console.log(group)
    return this.bigroup.save(entity)
  }
}
