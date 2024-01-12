import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class MinesAddDto {
  
    @ApiProperty({
        description: 'param for mine_name',
        example: 'Mine'
    })
    @IsNotEmpty()
    mine_name: string;
  
    @ApiProperty({
        description: 'param for location',
        example: 'Conggo'
    })
    @IsNotEmpty()
    location: string;
  
    @ApiProperty({
        description: 'param for operation_status',
        example: 'inactive'
    })
    @IsNotEmpty()
    operation_status: string;
  
    @ApiProperty({
        description: 'param for contact_information',
        example: '+123456789'
    })
    @IsNotEmpty()
    contact_information: string;
  
    @ApiProperty({
        description: 'param for capacity',
        example: '1000'
    })
    @IsNotEmpty()
    capacity: string;
}