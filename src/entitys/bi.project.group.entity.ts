import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AuditEntity } from './base.audit.entity'

@Entity('bi_project_group')
export class BiProjectGroup extends AuditEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id:string

    @Column(
      {
        type: 'varchar',
        length: '255'
      }
    )
    @ApiProperty()
    name: string
}
