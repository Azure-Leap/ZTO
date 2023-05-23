import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Cart } from "src/carts/entities/cart.entity";
import { User } from "src/users/entities/user.entity";

@Schema({timestamps: true})
export class Order {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id:User[];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' })
    cart_id:Cart[];
    @Prop()
    totalAmount:number;
    @Prop({default:"HULEEGDEJ_BGA"})
    status:  "HULEEGDEJ_BGA" | "TULSUN" | "TSUTSALSAN" | "HURGELTEND_GARSAN" |"HULEEJ_AVSAN"
}

export const OrderSchema = SchemaFactory.createForClass(Order)