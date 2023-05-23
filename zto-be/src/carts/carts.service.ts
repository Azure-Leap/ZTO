import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './entities/cart.entity';
import { Website } from 'src/websites/entities/website.entity';

@Injectable()
export class CartsService {
  constructor(@InjectModel("Cart") private readonly cartModel: Model<Cart>){}

 async create(createCartDto: CreateCartDto) {
    console.log("object cart", createCartDto);
  //   if (!createCartDto.cartItems) {
  //     return  await this.cartModel.create(createCartDto);
  // }else{
  // }

    // const user = await this.cartModel.findCart()
    return  await this.cartModel.create(createCartDto);
  }

  async findAll() {
    return  await this.cartModel.find().populate("user_id").exec();
  }

  async findOne(id: string) {
    return await this.cartModel.findById(id)
  }

  async findOneByUserId(user_id: string) {
    console.log(user_id);
      return await this.cartModel.findOne({user_id: user_id}).populate('user_id').exec();
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    return await this.cartModel.findByIdAndUpdate(id, updateCartDto, {new:true});
  }

  async remove(id: string) {
    return await this.cartModel.findByIdAndDelete(id);
  }
}
