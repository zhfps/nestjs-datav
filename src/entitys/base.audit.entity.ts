import { ApiProperty } from '@nestjs/swagger'
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export class AuditEntity {
        /* 创建时间 */
        @CreateDateColumn({ name: 'createTime', comment: '创建时间' })
        @ApiProperty()
        createTime: Date

        /* 更新时间 */
        @UpdateDateColumn({ name: 'updateTime', comment: '更新时间' })
        @ApiProperty()
        updateTime: Date

        /* 创建人 */
        @Column({ name: 'createBy', comment: '创建人', length: '50', default: '' })
        @ApiProperty()
        createBy: string

        /* 更新人 */
        @Column({ name: 'updateBy', comment: '更新人', length: '50', default: '' })
        @ApiProperty()
        updateBy: string
}
