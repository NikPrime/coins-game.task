import { IsNumber, IsUUID } from 'class-validator';
import { ProductDto } from '../../product/dto/product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetCartProductsOutputDto {
    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsUUID()
    userId: string;

    @ApiProperty()
    @IsUUID()
    productId: string;

    @ApiProperty({ type: [ProductDto] })
    product: ProductDto[];
}
