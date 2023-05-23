import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor (@InjectModel("Payment") private readonly  paymentModel:Model<Payment>){}
  async create(createPaymentDto: CreatePaymentDto) {
    return  await this.paymentModel.create(createPaymentDto) ;
  }

  async findAll() {
    return  await this.paymentModel.find().populate("user_id").populate("order_id").exec();
  }

 async findOne(id: string) {
    return await this.paymentModel.findById(id);
  }

 async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return await this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, {new:true}) ;
  }

  async remove(id: string) {
    return await this.paymentModel.findByIdAndDelete(id);
  }
}
