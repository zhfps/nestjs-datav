import { ApiProperty } from '@nestjs/swagger'
import { Entity, Generated, PrimaryColumn } from 'typeorm'
import { AuditEntity } from './base.audit.entity'

@Entity('bi_project_group')
export class BiProjectGroup extends AuditEntity {
    @PrimaryColumn()
    @Generated('uuid')
    @ApiProperty()
    id:string

    @PrimaryColumn()
    @ApiProperty()
    name: string
}
