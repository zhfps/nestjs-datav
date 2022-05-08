import { ApiProperty } from '@nestjs/swagger'
import { Entity, PrimaryColumn } from 'typeorm'

@Entity('sys_user')
export class User {
    @PrimaryColumn()
    @ApiProperty()
    id:number

    @PrimaryColumn()
    @ApiProperty()
    name: string

    @ApiProperty()
    password: string

    @ApiProperty()
    desc:string
}
