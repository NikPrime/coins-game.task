import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddProductToCartInputDto } from './dto/add-product-to-cart-input.dto';
import { AddProductToCartOutputDto } from './dto/add-product-to-cart-output.dto';
import { GetCartProductsOutputDto } from './dto/get-cart-products-output.dto';
import { UpdateCartProductQuantityInputDto } from './dto/update-cart-product-quantity-input.dto';
import { UpdateCartProductQuantityOutputDto } from './dto/update-cart-product-quantity-output.dto';
@ApiTags('Cart')
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}
    @ApiOperation({
        operationId: 'getCartProducts',
        summary: 'get cart products by user id',
    })
    @ApiResponse({
        status: 200,
        description: 'Get cart product success',
        type: [GetCartProductsOutputDto],
    })
    @Get(':userId')
    async getCartProducts(@Param('id') userId: string) {
        return this.cartService.getCartProducts(userId);
    }

    @ApiOperation({
        operationId: 'getAllCartsProducts',
        summary: 'get all carts products',
    })
    @ApiResponse({
        status: 200,
        description: 'Get all carts products success',
        type: [GetCartProductsOutputDto],
    })
    @Get()
    async getAllCartsProducts() {
        return this.cartService.getAllCartsProducts();
    }

    @ApiOperation({
        operationId: 'addProductToCart',
        summary: 'add product to card by userId and productId',
    })
    @ApiResponse({
        status: 200,
        description: 'Add product to card success',
        type: AddProductToCartOutputDto,
    })
    @Post()
    async addProductToCart(
        @Query('userId') userId: string,
        @Query('productId') productId: string,
        @Body() addProductToCartInput: AddProductToCartInputDto,
    ) {
        return this.cartService.addProductToCart(userId, productId, addProductToCartInput);
    }

    @ApiOperation({
        operationId: 'updateCartProductQuantity',
        summary: 'update cart product quantity by userId and productId',
    })
    @ApiResponse({
        status: 200,
        description: 'update cart product quantity success',
        type: UpdateCartProductQuantityOutputDto,
    })
    @Patch()
    async updateCartProductQuantity(
        @Query('userId') userId: string,
        @Query('productId') productId: string,
        @Body() quantity: UpdateCartProductQuantityInputDto,
    ) {
        return this.cartService.updateCartProductQuantity(userId, productId, quantity);
    }

    @ApiOperation({
        operationId: 'updateCartProductQuantity',
        summary: 'update cart product quantity by userId and productId',
    })
    @ApiResponse({
        status: 200,
        description: 'update cart product quantity success',
        type: AddProductToCartOutputDto,
    })
    @Delete()
    async deleteProductFromCart(@Query('userId') userId: string, @Query('productId') productId: string) {
        return this.cartService.deleteProductFromCart(userId, productId);
    }
}
