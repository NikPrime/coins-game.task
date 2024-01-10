import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteProductOutputDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
