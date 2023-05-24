import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CartsService } from 'src/carts/carts.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService, private readonly cartService: CartsService) {}

  @Post()
 async create(@Body() createOrderDto) {
    const { cart_id,  user_id}  =  createOrderDto
    const cart = await this.cartService.findOne({_id: cart_id});

    const { cartItem, totalPrice} = cart

    const order = {
      user_id,
      totalPrice,
      websites: cartItem
    }
    await this.cartService.remove(cart_id);

    return this.ordersService.create(order);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
  @Get('/user/:user_id')
  findOneByUserId(@Param('user_id') user_id: string) {
      return this.ordersService.findOneByUserId(user_id);
  }

  @Put('/payment/:order_id')
  updatePaymentOrder(@Param('order_id') order_id:string, @Body() updatePayment: UpdateOrderDto ){
    console.log("oo", order_id)
    return this.ordersService.findByIdAndUpdatePayment(order_id, updatePayment)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
