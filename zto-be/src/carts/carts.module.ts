import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { WebsitesModule } from 'src/websites/websites.module';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './entities/cart.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Cart', schema:CartSchema}]), WebsitesModule, UsersModule],
  controllers: [CartsController],
  providers: [CartsService],
  exports:[CartsService]
})
export class CartsModule {}
