import { Controller, Get, HttpCode } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/entitys/user.entity'
import { UserService } from 'src/service/user.service'

@ApiTags('用户相关接口')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/list')
  @ApiResponse({ status: 200, type: User, isArray: true })
  getList(): Promise<Array<User>> {
    return this.userService.list()
  }
}
