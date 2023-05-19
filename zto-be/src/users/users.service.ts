/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Req, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer'
import { Request, Response } from 'express';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>,  
  private readonly mailerService: MailerService 
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const { username, email, password, phone_number } = createUserDto;

    const hashedPassword = await bcrypt.hashSync(password, 10);
    createUserDto.password = hashedPassword;
    return await this.userModel.create(createUserDto);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(email: string) {
    console.log(email)
    const user = await this.userModel.findOne({email});
    console.log("serice,", user)
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }

  async sendMail(email: string) {
    const user = await this.userModel.findOne({email})
    // let transporter = nodemailer.createTransport({
    //   service:'gmail',
    //   auth:{
    //     user: process.env.GMAIL_ZTO_EMAIL,
    //     pass: process.env.GMAIL_PASS
    //   }
    // })
    // const message = {
    //   from:'ztoweb37@gmail.com',
    //   to : user.email,
    //   subject:"hh",
    //   text: 'welcome', // plaintext body
    //   html: `
    //   <b>Recover Password link</b>
    //   <a href="localhost:3000/newpassword?email=${email}"> This link </a>
    //   `, 
    // }
    // transporter.sendMail({
    //   from:'ztoweb37@gmail.com',
    //   to : 'nandir.be@gmail.com',
    //     subject: 'hello world!',
    //     text: 'hello world!'
    //   }, (err)=>{
    //   console.log(err)
    // })
   return await  this
      .mailerService
      .sendMail({
        to: `${user.email}`, 
        from: 'ztoweb37@gmail.com',
        subject: 'Recovery Password Link', 
        text: 'welcome', 
        html: `
        <b>Recover Password link</b>
        <a href="localhost:3000/newpassword?email=${email}"> This link </a>
        `, // HTML body content
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });   
  }
}
