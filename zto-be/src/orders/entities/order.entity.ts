import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Cart } from "src/carts/entities/cart.entity";
// import { Payment } from "src/payments/entities/payment.entity";
import { User } from "src/users/entities/user.entity";

class PaymentCard{
    @Prop()
    cardNumber:string;
    @Prop()
    cvvNumber: string;
    @Prop()
    expiryMonth:string;
    @Prop()
    expiryYear:string;
    @Prop()
    cardName:string;
    @Prop()
    mobileNumber:string;
}

 class Payment {
    type: PaymentCard
    @Prop({default:"VISA"})
    paymentMethod: "VISA" | "QP";   
    @Prop({required:true})
    amount:number
    @Prop({default:  "PROCESS"})
    status: "SUCCESS" | "CANCEL"| "PROCESS" 
}

@Schema({timestamps: true})
export class Order {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id:User[];
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' })
    cart_id:Cart[];

    @Prop()
    websites: [];

    @Prop()
    totalAmount:number;

    @Prop()
    payment: Payment
} 

export const OrderSchema = SchemaFactory.createForClass(Order)