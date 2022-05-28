import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'
import { AuditEntity } from './base.audit.entity'

@Entity('bi_project_filter')
export class BiProjectFilter extends AuditEntity {
    @PrimaryColumn()
    @Generated('uuid')
    @ApiProperty()
    id:string

    @Column()
    @ApiProperty()
    projectId: string

    @PrimaryColumn()
    @ApiProperty()
    name: string

    @Column()
    @ApiProperty()
    code: string
    @Column()
    @ApiProperty()
    origin: string
}
