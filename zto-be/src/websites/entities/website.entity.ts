import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Category } from "src/categories/entities/category.entity";

@Schema({timestamps:true})
export class Website{
    @Prop({ required: true })
    name: String;
    @Prop({required:true, default: 'Website'})
    webType: String;
    @Prop( { required: true } )
    image: String;
    @Prop({ required: true })
    demoLink: String;
    @Prop({ required: true })
    editLink: String;
    @Prop({ required: true })
    detail:String;
    @Prop({ required: true })
    price: Number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category:Category[];
}

export const WebsiteSchema = SchemaFactory.createForClass(Website);
