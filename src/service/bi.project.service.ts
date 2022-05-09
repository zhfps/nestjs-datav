import { InjectRepository } from '@nestjs/typeorm'
import { BiProject } from 'src/entitys/bi.project.entity'
import { Repository } from 'typeorm'

export class BiProjcetService {
  constructor(
        @InjectRepository(BiProject)
        private readonly projectRepository: Repository<BiProject>
  ) {

  }

  async list():Promise<Array<BiProject>> {
    return this.projectRepository.query(`select * from bi_project order by createAt desc`)
  }

  async getById(id: string):Promise<BiProject> {
    return this.projectRepository.query(`select * from bi_project where id = ${id}`)
  }
}
