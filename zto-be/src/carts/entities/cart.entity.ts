import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/users/entities/user.entity";
import { Website } from "src/websites/entities/website.entity";


// class CartItem {
//     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Website' })
//     template:[Website];
//     @Prop({default:1})
//     quantity:number;
//     @Prop()
//     price: Number;
// }

@Schema({timestamps:true})
export class Cart {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id:User;
    @Prop({ type: Array })
    items:[];
    @Prop()
    totalPrice:number
}

export const CartSchema = SchemaFactory.createForClass(Cart);