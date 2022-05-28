import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'
import { AuditEntity } from './base.audit.entity'

@Entity('bi_project')
export class BiProject extends AuditEntity {
    @PrimaryColumn()
    @Generated('uuid')
    @ApiProperty()
    id:string

    @Column()
    @ApiProperty()
    groupId:string

    @Column()
    @ApiProperty()
    name: string

    @Column()
    @ApiProperty()
    share: string

    @Column()
    @ApiProperty()
    thumbnail:string // 缩略图

    @ApiProperty()
    @Column('simple-json')
    config: {
        coms: Array<any>
    }
}
