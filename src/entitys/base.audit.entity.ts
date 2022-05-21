import { ApiHideProperty } from '@nestjs/swagger'
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export class AuditEntity {
        /* 创建时间 */
        @CreateDateColumn({ name: 'createAt', comment: '创建时间' })
        // @ApiProperty()
        @ApiHideProperty()
        createAt: Date

        /* 更新时间 */
        @UpdateDateColumn({ name: 'updateAt', comment: '更新时间' })
        // @ApiProperty()
        @ApiHideProperty()
        updateAt: Date

        /* 创建人 */
        @Column({ name: 'createBy', comment: '创建人', length: '50', default: '' })
        // @ApiProperty()
        @ApiHideProperty()
        createBy: string

        /* 更新人 */
        @Column({ name: 'updateBy', comment: '更新人', length: '50', default: '' })
        // @ApiProperty()
        @ApiHideProperty()
        updateBy: string
}
