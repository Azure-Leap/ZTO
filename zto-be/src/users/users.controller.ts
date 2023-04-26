import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async create(@Req() req:Request, @Res() res:Response, @Body() createUserDto: CreateUserDto) {
    const user= await this.usersService.create(createUserDto);
    const {username, email, password, phone_number} = user
    try{
      if(!username||!email||!password){
        res.status(400).json({message:"Username, email, password bichne uu?"})
      }
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
}
