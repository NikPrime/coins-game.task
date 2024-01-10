import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { PrismaService } from '../../db/prisma.service';

@Module({
    providers: [ProductService, PrismaService, ProductRepository],
    controllers: [ProductController],
})
export class ProductModule {}
