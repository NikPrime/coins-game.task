import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';

@Injectable()
export class CartRepository {
    constructor(private prisma: PrismaService) {}
    getCartProducts(userId: string) {
        return this.prisma.cartItem.findMany({
            where: { userId },
            include: { product: true },
        });
    }

    addProductToCart(productId: string, userId: string, quantity: number) {
        return this.prisma.cartItem.create({
            data: {
                userId,
                productId,
                quantity,
            },
        });
    }

    updateCartProduct(userId: string, productId: string, quantity: number) {
        return this.prisma.cartItem.update({
            where: {
                userId_productId: {
                    userId,
                    productId,
                },
            },
            data: { quantity },
        });
    }

    getCartProduct(userId: string, productId: string) {
        return this.prisma.cartItem.findFirst({
            where: {
                userId,
                productId,
            },
        });
    }
    deleteProductFromCart(userId: string, productId: string) {
        return this.prisma.cartItem.delete({
            where: {
                userId_productId: {
                    userId,
                    productId,
                },
            },
        });
    }
}
