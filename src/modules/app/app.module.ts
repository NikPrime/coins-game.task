import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { PrismaModule } from '../../db/prisma/prisma.module';

@Module({
    imports: [UserModule, ProductModule, CartModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
