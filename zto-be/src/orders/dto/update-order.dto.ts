import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto  extends PartialType(CreateOrderDto) {}
// export class UpdatePayment extends PartialType(CreateOrderDto){}