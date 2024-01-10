import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class ProductDto {
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}
