import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { MongooseError } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './entities/payment.entity';

@Module({
  imports :[MongooseModule.forFeature([{name:'Payment', schema: PaymentSchema}])],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
