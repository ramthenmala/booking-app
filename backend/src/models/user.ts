import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'
import { saltRoutnds } from "../constants/constants";

// TS Interface
export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

// mongoose schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
})

userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, saltRoutnds)
    }
    next();
})

const User = model<UserType>('User', userSchema);

export default User;