import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Category {
    @Prop({required:true})
    title:String;
    @Prop({required:true})
    image: String;
    @Prop()
    description :String;
};
export const CategorySchema =SchemaFactory.createForClass(Category)
