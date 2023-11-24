"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const users_route_1 = require("./app/modules/users/users.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/users", users_route_1.UserRouter);
const getACon = (req, res) => {
    res.status(200).json({
        status: "Succcess",
        message: "Welcome to my assign",
    });
};
app.get("/", getACon);
exports.default = app;
