import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { GetProductOutputDto } from './dto/get-product-output.dto';
import { CreateProductOutputDto } from './dto/create-product-output.dto';
import { UpdateProductOutputDto } from './dto/update-product-output.dto';
import { CreateProductInputDto } from './dto/create-product-input.dto';
import { UpdateProductInputDto } from './dto/update-product-input.dto';
import { DeleteProductOutputDto } from './dto/delete-product-output.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @ApiOperation({
        operationId: 'getProduct',
        summary: 'get product by id',
    })
    @ApiResponse({
        status: 200,
        description: 'Get product success',
        type: GetProductOutputDto,
    })
    @Get(':id')
    async getProduct(@Param('id') id: string) {
        return this.productService.getProduct(id);
    }

    @ApiOperation({
        operationId: 'createProduct',
        summary: 'create product',
    })
    @ApiResponse({
        status: 200,
        description: 'Create product success',
        type: CreateProductOutputDto,
    })
    @Post()
    async createProduct(@Body() product: CreateProductInputDto) {
        return this.productService.createProduct(product);
    }

    @ApiOperation({
        operationId: 'updateProduct',
        summary: 'update product by id',
    })
    @ApiResponse({
        status: 200,
        description: 'Update product success',
        type: UpdateProductOutputDto,
    })
    @Patch(':id')
    async updateProduct(@Param('id') id: string, @Body() product: UpdateProductInputDto) {
        return this.productService.updateProduct(id, product);
    }

    @ApiOperation({
        operationId: 'deleteProduct',
        summary: 'delete product by id',
    })
    @ApiResponse({
        status: 200,
        description: 'Update product success',
        type: DeleteProductOutputDto,
    })
    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id);
    }
}
