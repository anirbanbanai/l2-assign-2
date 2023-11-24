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

// UserSchema.pre<UsersInterface>("save")
UserSchema.pre<UsersInterface>("save", async function (next) {
    // if (!this.isModified("password")) {
    //     return next();
    // }

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        // Replace the plain password with the hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
    console.log(error);
    }
});

export const UserModels = model<UsersInterface>("User", UserSchema)