import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddProductToCartInputDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
