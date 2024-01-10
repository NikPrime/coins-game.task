import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GetProductOutputDto } from './dto/get-product-output.dto';
import { CreateProductInputDto } from './dto/create-product-input.dto';
import { CreateProductOutputDto } from './dto/create-product-output.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateProductInputDto } from './dto/update-product-input.dto';
import { UpdateProductOutputDto } from './dto/update-product-output.dto';
import { DeleteProductOutputDto } from './dto/delete-product-output.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    async getProduct(id: string): Promise<GetProductOutputDto> {
        try {
            const existedProduct = await this.productRepository.getProduct(id);
            if (!existedProduct) throw new NotFoundException('Product not found');

            return plainToClass(GetProductOutputDto, existedProduct);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async createProduct(product: CreateProductInputDto): Promise<CreateProductOutputDto> {
        try {
            const newUuid = uuidv4();

            const createdProduct = await this.productRepository.createProduct(newUuid, product);

            return plainToClass(CreateProductOutputDto, createdProduct);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async updateProduct(id: string, product: UpdateProductInputDto): Promise<UpdateProductOutputDto> {
        try {
            const existedProduct = await this.productRepository.getProduct(id);
            if (!existedProduct) throw new NotFoundException('Product not found');

            const updatedProduct = await this.productRepository.updateProduct(id, product);

            return plainToClass(UpdateProductOutputDto, updatedProduct);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async deleteProduct(id: string) {
        try {
            const deletingProduct = await this.productRepository.getProduct(id);
            if (!deletingProduct) throw new NotFoundException('Product not exist');

            const deletedProduct = await this.productRepository.deleteProduct(id);

            return plainToClass(DeleteProductOutputDto, deletedProduct);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
