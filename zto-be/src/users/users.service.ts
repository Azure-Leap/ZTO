import { Injectable, Req, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<Users>) {}
 
  async create( createUserDto: CreateUserDto) {
   const {username, email, password, phone_number}=createUserDto

     const hashedPassword = await bcrypt.hashSync(password, 10);      
     createUserDto.password=hashedPassword
     return await this.userModel.create(createUserDto);
  }

  async findAll() {
   return await this.userModel.find();

  }

  async findOne(email: string) {
    const user= await this.userModel.findOne({email:email});
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}


