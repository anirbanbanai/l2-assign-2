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
exports.UserController = void 0;
const users_service_1 = require("./users.service");
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = req.body.users;
        const result = yield users_service_1.UsersService.creatUserIntoDb(users);
        const { userId, username, fullName, age, email, isActive, hobbies, address } = result;
        const resultOutPass = { userId, username, fullName, age, email, isActive, hobbies, address };
        res.status(200).json({
            success: true,
            message: 'User is created successfully',
            data: resultOutPass,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.UsersService.getAllUserFromDb();
        res.status(200).json({
            success: true,
            message: 'User is created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield users_service_1.UsersService.getSingleUserFromDb(userId);
        res.status(200).json({
            success: true,
            message: 'Student fetch  successfull',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
const updateSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const updatedData = req.body;
        const result = yield users_service_1.UsersService.getUpdateUserData(userId, updatedData);
        res.status(200).json({
            success: true,
            message: 'Student update  successfull',
            data: updatedData,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
const deleteSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield users_service_1.UsersService.deleteSingleUserFromDb(userId);
        res.status(200).json({
            success: true,
            message: 'Student fdelete successfull',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
exports.UserController = {
    createUsers,
    getAllUsers,
    getSingleUser,
    deleteSingleUser,
    updateSingleUser
};
