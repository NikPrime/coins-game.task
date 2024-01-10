import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartProductQuantityOutputDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
