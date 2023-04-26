import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from './auth.guard';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Req() req:Request, @Res() res:Response,@Body() signInDto: Record<string, any>) {
    // console.log("LOGIN");
   const user = await this.authService.signIn(signInDto.email, signInDto.password);
   if(!user.sucess){
    res.status(400).json({ message: `email, password buruu bna???`, error:user.message});
   }else{
    res.status(200).json({message:'Hereglegch amjilttai newterlee', user})
   }
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() req){
    return req.user
  }
}
