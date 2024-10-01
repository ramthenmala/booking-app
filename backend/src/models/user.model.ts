import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import config from 'config';
import { IUserType } from "../type/IUserType";

const userSchema = new mongoose.Schema<IUserType>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const saltFactor = config.get<number>('saltWorkFactor');
        const salt = await bcrypt.genSalt(saltFactor);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error: any) {
        next(error);
    }
});

const UserModel = mongoose.model<IUserType>('User', userSchema);

export default UserModel;