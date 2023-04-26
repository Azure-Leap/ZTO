import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({timestamps:true})
export class Websities{
    @Prop({ required: true })
    name: String;
    @Prop({required:true})
    web_id: Number;
    @Prop([String, { required: true }] )
    image: [String];
    @Prop({ required: true })
    demoLink: String;
    @Prop({ required: true })
    editLink: String;
    @Prop({ required: true })
    detail:String;
    @Prop({ required: true })
    price: Number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'category' })
    category:String;
}

export const WebsiteSchema = SchemaFactory.createForClass(Websities);
