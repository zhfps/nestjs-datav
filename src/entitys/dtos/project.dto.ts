import { ApiProperty } from '@nestjs/swagger'
export class BiProjectGroupDto {
    @ApiProperty()
    id:string

    @ApiProperty()
    name: string

    @ApiProperty()
    count: number
}
