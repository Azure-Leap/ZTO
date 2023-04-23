import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class Users {
    @Prop()
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

export const UserSchema = SchemaFactory.createForClass(Users)
