import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/users/entities/user.entity";
import { Website } from "src/websites/entities/website.entity";

@Schema({timestamps:true})
export class Cart {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user:User[];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Website' })
    website:Website[];
    @Prop({ default: true })
    isMain: boolean;
}

export const CartSchema = SchemaFactory.createForClass(Cart);