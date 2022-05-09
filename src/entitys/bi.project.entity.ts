import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'
import { AuditEntity } from './base.audit.entity'

@Entity('bi_project')
export class BiProject extends AuditEntity {
    @PrimaryColumn()
    @Generated('uuid')
    @ApiProperty()
    id:string

    @ApiProperty()
    groupId:string

    @PrimaryColumn()
    @ApiProperty()
    name: string

    @ApiProperty()
    share: string

    @ApiProperty()
    thumbnail:string // 缩略图

    @ApiProperty()
    @Column('simple-json')
    config: {
        coms: Array<any>
    }
}
