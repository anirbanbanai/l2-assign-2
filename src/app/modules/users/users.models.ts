import { Schema, model } from "mongoose";
import { Adress, FullName, UsersInterface,  } from "./users.interface";
import bcrypt from "bcrypt";


const FullNameSchema = new Schema<FullName>({
    firstName: {type: String},
    lastName: {type: String}
})

const AdressSchema = new Schema<Adress>({
    street: {type: String},
    city: {type: String},
    country: {type: String}
})

const UserSchema = new Schema<UsersInterface>({
    userId: {type: Number, unique: true},
    username: {type: String},
    password: {type: String},
    fullName: FullNameSchema,
    age: {type: Number},
    email: {type: String},
    isActive: {type: Boolean},
    hobbies: {
        type: [String],
    },
    address:AdressSchema,
})


UserSchema.pre<UsersInterface>("save", async function (next) {
   
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
    console.log(error);
    }
});

export const UserModels = model<UsersInterface>("User", UserSchema)