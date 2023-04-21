import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class User {
    @Prop({required: true})
    username: String;
    @Prop({required: true})
    email: String;
    @Prop({required: true})
    password: String;
    @Prop({default: "User"})
    role: String;
    @Prop()
    phone_number: String;
    @Prop()
    address: String;
}

export const UserSchema = SchemaFactory.createForClass(User)