import { Schema, model } from "mongoose";
import { Adress, FullName, UsersInterface,  } from "./users.interface";


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
    userId: {type: Number},
    username: {type: String},
    password: {type: String},
    fullName: FullNameSchema,
    age: {type: Number},
    email: {type: String},
    isActive: {type: Boolean},
    hobbies: {
        type: [String],
        enum: ["swiming","coding"]
    },
    address:AdressSchema,
})


export const UserModels = model<UsersInterface>("User", UserSchema)