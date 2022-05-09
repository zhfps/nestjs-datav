import { Controller, Get, Param } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/entitys/user.entity'
import { UserService } from 'src/service/user.service'

@ApiTags('用户相关接口')
@Controller('user/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  @ApiResponse({ status: 200, type: User, isArray: true })
  getList(): Promise<Array<User>> {
    return this.userService.list()
  }

  @Get('get:id')
  @ApiResponse({ status: 200, type: User })
  getUser(@Param('id') id:number): Promise<User> {
    return this.userService.getUserById(id)
  }
}
