import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { GetCartProductsOutputDto } from './get-cart-products-output.dto';

export class GetAllCartsProductsOutputDto {
    @ApiProperty()
    @IsUUID()
    userId: string;

    @ApiProperty({ type: [GetCartProductsOutputDto] })
    cartProducts: GetCartProductsOutputDto[];
}
