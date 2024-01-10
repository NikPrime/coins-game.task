import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DeleteProductOutputDto } from '../product/dto/delete-product-output.dto';
import { AddProductToCartInputDto } from './dto/add-product-to-cart-input.dto';
import { CartRepository } from './cart.repository';
import { AddProductToCartOutputDto } from './dto/add-product-to-cart-output.dto';
import { UpdateCartProductQuantityInputDto } from './dto/update-cart-product-quantity-input.dto';
import { GetCartProductsOutputDto } from './dto/get-cart-products-output.dto';
import { UpdateCartProductQuantityOutputDto } from './dto/update-cart-product-quantity-output.dto';
import { GetAllCartsProductsOutputDto } from './dto/get-all-carts-products-output.dto';

@Injectable()
export class CartService {
    constructor(private cartRepository: CartRepository) {}

    async getCartProducts(userId: string): Promise<GetCartProductsOutputDto[]> {
        try {
            const cartProducts = await this.cartRepository.getCartProducts(userId);
            if (!cartProducts) throw new NotFoundException('Cart not found');

            return plainToClass(GetCartProductsOutputDto, cartProducts);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async getAllCartsProducts() {
        try {
            const cartsProducts = await this.cartRepository.getAllCartsProducts();

            const grouped = cartsProducts.reduce((acc, item) => {
                if (!acc[item.userId]) {
                    acc[item.userId] = { userId: item.userId, products: [] };
                }
                acc[item.userId].products.push({
                    product: item.product,
                    quantity: item.quantity,
                });
                return acc;
            }, {});

            return Object.values(grouped).map((cartProducts) => plainToClass(GetAllCartsProductsOutputDto, cartProducts));
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async addProductToCart(userId: string, productId: string, addProductToCartInput: AddProductToCartInputDto): Promise<AddProductToCartOutputDto> {
        try {
            const { quantity } = addProductToCartInput;
            const addedProductToCart = await this.cartRepository.addProductToCart(productId, userId, quantity);

            return plainToClass(AddProductToCartOutputDto, addedProductToCart);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async updateCartProductQuantity(
        userId: string,
        productId: string,
        updateCartProductQuantity: UpdateCartProductQuantityInputDto,
    ): Promise<UpdateCartProductQuantityOutputDto> {
        try {
            const { quantity } = updateCartProductQuantity;
            const updatedProduct = await this.cartRepository.updateCartProduct(userId, productId, quantity);

            return plainToClass(UpdateCartProductQuantityOutputDto, updatedProduct);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async deleteProductFromCart(userId: string, productId: string) {
        try {
            const deletedProduct = await this.cartRepository.deleteProductFromCart(userId, productId);
            return plainToClass(DeleteProductOutputDto, deletedProduct);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
