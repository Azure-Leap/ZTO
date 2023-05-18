import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, Request } from 'express';
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService , private readonly mailerServer:MailerService) {}

  @Post('/register')
  async create(@Req() req:Request, @Res() res:Response, @Body() createUserDto: CreateUserDto) {

    const {username, email, password, phone_number} = createUserDto

    const hashedPassword = await bcrypt.hash(password as string, 10);
    try{
      if(!username||!email||!password){
        res.status(400).json({message:"Username, email, password bichne uu?"})
      }
      const input  = {
        ... createUserDto,
        password: hashedPassword,
      }
      const user= await this.usersService.create(input);
      res.status(200).json({message: "Hereglegch amjilttai burtgegdlee", user})
    }catch(error){
      res.status(400).json({message:'Hereglegch amjiltgui burtgegdlee',error: error.message})
    }

  }

  @Get()
  async findAll(@Req() req:Request, @Res() res:Response) {   
   const users= await this.usersService.findAll();
    res.status(200).json({message: "Hereglegchin medeellig ilgeele", users})
  }
 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  // @Post('/forget-password')
  // async forgetPassword(@Req() req:Request, @Res() res:Response , email:string) {
  //   console.log(email);
  //   return  await this.mailerServer.sendMail();
  // }
}
