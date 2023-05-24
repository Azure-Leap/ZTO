import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './entities/order.entity';
import { CartsService } from 'src/carts/carts.service';
import { CartsModule } from 'src/carts/carts.module';
import { Cart } from 'src/carts/entities/cart.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"Order", schema:OrderSchema}]), CartsModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
