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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_models_1 = require("./users.models");
const creatUserIntoDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_models_1.UserModels.create(user);
    return result;
});
const getAllUserFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_models_1.UserModels.aggregate([{ $project: { age: 1, userId: 1, fullName: 1, email: 1, isActive: 1, hobbies: 1, address: 1 } }]);
    return result;
});
const getSingleUserFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_models_1.UserModels.aggregate([
        {
            $match: {
                userId: parseFloat(id),
            }
        },
        {
            $project: {
                username: 1,
                fullName: 1,
                age: 1,
                email: 1,
                address: 1
            }
        }
    ]);
    return result;
});
const getUpdateUserData = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_models_1.UserModels.updateOne({ userId: id }, { $set: updatedData });
    return result;
});
const deleteSingleUserFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_models_1.UserModels.deleteOne({ userId: id });
    return result;
});
exports.UsersService = {
    creatUserIntoDb,
    getAllUserFromDb,
    getSingleUserFromDb,
    getUpdateUserData,
    deleteSingleUserFromDb
};
