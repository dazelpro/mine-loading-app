import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UsersRegisterDto {
    @ApiProperty({
        description: 'param for username',
        example: 'admin'
    })
    @IsNotEmpty()
    username: string;
  
    @ApiProperty({
        description: 'param for email',
        example: 'admin@localhost.com'
    })
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'param for password',
        example: '123456'
    })
    @IsNotEmpty()
    password: string;
  
    @ApiProperty({
        description: 'param for role id',
        example: 1
    })
    id_role: number;

    @ApiProperty({
        description: 'param for mine id',
        example: 1
    })
    id_mine: number;
}

export class UsersLoginDto {
    @ApiProperty({
        description: 'param for username',
        example: 'admin'
    })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'param for password',
        example: '123456'
    })
    @IsNotEmpty()
    password: string;
}