import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserOutputDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
