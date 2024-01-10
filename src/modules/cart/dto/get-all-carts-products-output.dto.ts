import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { ProductDto } from '../../product/dto/product.dto';

export class GetAllCartsProductsOutputDto {
    @ApiProperty()
    @IsUUID()
    userId: string;

    @ApiProperty({ type: [ProductDto] })
    products: ProductDto[];
}
