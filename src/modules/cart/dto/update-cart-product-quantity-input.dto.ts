import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartProductQuantityInputDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
