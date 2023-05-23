import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel("Order") private readonly orderModel: Model<Order>){}
  async create(createOrderDto: CreateOrderDto) {
    console.log("orders",createOrderDto)
    return await this.orderModel.create(createOrderDto)
  }

  async  findAll() {
    return await this.orderModel.find().populate("user_id").populate("cart_id").exec();
  }

  async findOne(id: string) {
    return await this.orderModel.findById(id);
  }

  async findOneByUserId(user_id: string) {
    console.log("ord",user_id);
      return await this.orderModel.findOne({user_id: user_id}).populate('user_id').populate("cart_id").exec();
  }
 async update(id: string, updateOrderDto: UpdateOrderDto) {
    return  await this.orderModel.findByIdAndUpdate(id, updateOrderDto, {new: true});
  }

  async remove(id: string) {
    return  await this.orderModel.findByIdAndDelete(id) ;
  }
}
