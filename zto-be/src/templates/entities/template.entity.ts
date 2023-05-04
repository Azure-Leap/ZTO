import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Template {
    @Prop()
    page1:[{title:String }, {text:string},{btn:string}, {desc:string}];
    @Prop()
    page2:[{title:String }, {text:string},{btn:string}, {desc:string}];
}
export const TemplateSchema= SchemaFactory.createForClass(Template);