import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RolesAddDto {
    @ApiProperty({
        description: 'param for role name',
        example: 'admin'
    })
    @IsNotEmpty()
    role_name: string;
}