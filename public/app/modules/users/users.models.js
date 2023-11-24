"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModels = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const FullNameSchema = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String }
});
const AdressSchema = new mongoose_1.Schema({
    street: { type: String },
    city: { type: String },
    country: { type: String }
});
const UserSchema = new mongoose_1.Schema({
    userId: { type: Number },
    username: { type: String },
    password: { type: String },
    fullName: FullNameSchema,
    age: { type: Number },
    email: { type: String },
    isActive: { type: Boolean },
    hobbies: {
        type: [String],
        enum: ["swiming", "coding"]
    },
    address: AdressSchema,
});
// UserSchema.pre<UsersInterface>("save")
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // if (!this.isModified("password")) {
        //     return next();
        // }
        try {
            // Generate a salt
            const salt = yield bcrypt_1.default.genSalt(10);
            // Hash the password with the generated salt
            const hashedPassword = yield bcrypt_1.default.hash(this.password, salt);
            // Replace the plain password with the hashed password
            this.password = hashedPassword;
            next();
        }
        catch (error) {
            console.log(error);
        }
    });
});
exports.UserModels = (0, mongoose_1.model)("User", UserSchema);
