import { Schema, model } from "mongoose";

interface IUser{
    name: {type:String, required: true};
    email: {type:String, required: true};
    password: {type:String, required: true};
    role: {type:String, default: "User"};
    profileImg:{type: String}
}

const userSchema = new Schema<IUser>({});

const user = model("User", userSchema);

export default user;