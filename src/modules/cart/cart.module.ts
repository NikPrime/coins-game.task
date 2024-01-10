import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaService } from '../../db/prisma.service';
import { CartRepository } from './cart.repository';

@Module({
    providers: [CartService, PrismaService, CartRepository],
    controllers: [CartController],
})
export class CartModule {}
