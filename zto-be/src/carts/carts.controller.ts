import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {

    // db-s tuhain user umnu n card uusgsn bnuu ?
    // const hisCard = this.cartsService.findCart();

    //tiim bol tuhain item (template)-tai ijliig nemj bnu ?


    // tiim bol message 


    //ugui bol butgene

    return this.cartsService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.cartsService.findOne({_id});
  }

  @Get('/user/:user_id')
  findOneByUserId(@Param('user_id') user_id: string) {
      return this.cartsService.findOneByUserId(user_id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(id);
  }
  @Delete('/items/:id')
  cartItemDelete(@Param('id') id: string) {
    return this.cartsService.cartItemDelete(id);
  }
}
