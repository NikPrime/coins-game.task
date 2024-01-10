import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddProductToCartOutputDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    productId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
