import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({timestamps:true})
export class Websites{
    @Prop({ required: true })
    name: String;
    @Prop({required:true})
    webType: String;
    @Prop( { required: true } )
    image: [String];
    @Prop({ required: true })
    demoLink: String;
    @Prop()
    editLink: String;
    @Prop({ required: true })
    detail:String;
    @Prop({ required: true })
    price: Number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'category' })
    category:String;
}

export const WebsiteSchema = SchemaFactory.createForClass(Websites);
