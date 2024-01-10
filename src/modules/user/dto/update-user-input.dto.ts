import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserInputDto {
    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsEmail()
    email?: string;

    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    name?: string;
}
