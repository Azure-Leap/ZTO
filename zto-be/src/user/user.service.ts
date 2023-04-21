import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User> ){}
 async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto)
  }

  // async findAll() {
  //   return await this.userModel.find();
  // }
  async findAll() {
    const res = await this.userModel.find();
    return res;
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true}) ;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}