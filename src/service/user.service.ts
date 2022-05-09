import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entitys/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) {
  }

  async list() {
    return this.userRepository.query('select * from sys_user')
  }

  async getUserById(id: number) {
    return this.userRepository.query(`select * from sys_user where id = ${id}`)
  }
}
