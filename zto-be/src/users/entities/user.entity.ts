import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class User {
    @Prop({required: true})
    username: String;
    @Prop()
    gender: String;
    @Prop({default: "https://res.cloudinary.com/dso5fsmob/image/upload/v1684228158/w5jkw5vx8fupimlyhrc3.png"})
    profileImg: String;
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
