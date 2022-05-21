import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'
import { AuditEntity } from './base.audit.entity'

@Entity('bi_project_component')
export class BiComponent extends AuditEntity {
    @PrimaryColumn()
    @Generated('uuid')
    @ApiProperty()
    id:string

    @ApiProperty()
    projectId:string

    @ApiProperty()
    parentId:string

    @PrimaryColumn()
    @ApiProperty()
    name: string

    @ApiProperty()
    @Column('simple-json')
    content: {
        coms: Array<any>
    }
}
