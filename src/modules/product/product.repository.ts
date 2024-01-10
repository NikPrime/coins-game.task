import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CreateProductInputDto } from './dto/create-product-input.dto';
import { UpdateProductInputDto } from './dto/update-product-input.dto';
@Injectable()
export class ProductRepository {
    constructor(private prisma: PrismaService) {}

    getProduct(id: string) {
        return this.prisma.product.findUnique({
            where: { id },
        });
    }

    getAllProducts() {
        return this.prisma.product.findMany();
    }

    createProduct(id: string, product: CreateProductInputDto) {
        return this.prisma.product.create({
            data: {
                id,
                ...product,
            },
        });
    }

    updateProduct(id: string, product: UpdateProductInputDto) {
        return this.prisma.product.update({
            where: { id },
            data: product,
        });
    }

    deleteProduct(id: string) {
        return this.prisma.product.delete({
            where: {
                id,
            },
        });
    }
}
