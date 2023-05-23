import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Cart } from "src/carts/entities/cart.entity";
import { Order } from "src/orders/entities/order.entity";
import { User } from "src/users/entities/user.entity";

// enum PaymentMethod {
//    VISA = 'visa',
//    QP = 'qp'
//   }

//   enum PaymentValidation{
//     SUCCESS= 'success',
//     CANCEL = 'cancel',
//     PROCESS = 'process'
//   }

@Schema({timestamps:true})
export class Payment {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id:User[];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
    order_id:Order[];
    @Prop({default:"VISA"})
    paymentMethod: "VISA" | "QP";
    @Prop({default:"Хүлээгдэж байна"})
    status:  "SUCCESS" | "CANCEL" | "Хүлээгдэж байна" 
    @Prop({require:true})
    amount:number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);