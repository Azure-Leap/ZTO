import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';
import { Cart } from 'src/carts/entities/cart.entity';
import { CartsService } from 'src/carts/carts.service';

@Injectable()
export class OrdersService {
  constructor(@InjectModel("Order") private readonly orderModel: Model<Order>){}
  async create(input) {

    console.log(input, "----")
    return  await this.orderModel.create(input)
  }

  async  findAll() {
    return await this.orderModel.find().populate("user_id").populate("cart_id").exec();
  }

  async findOne(id: string) {
    return await this.orderModel.findById(id);
  }
 

  async findOneByUserId(user_id: string) {
      return await this.orderModel.findOne({user_id: user_id}).populate('user_id').populate("cart_id").exec();
  }
 async update(id: string, updateOrderDto: UpdateOrderDto) {
    return  await this.orderModel.findByIdAndUpdate(id, updateOrderDto, {new: true});
  }

  async remove(id: string) {
    return  await this.orderModel.findByIdAndDelete(id) ;
  }

  async findByIdAndUpdatePayment(order_id:string, updatePayment: UpdateOrderDto){
    console.log("oo", order_id)
    return await this.orderModel.findByIdAndUpdate( {_id:order_id} ,{...updatePayment})
  }
}
