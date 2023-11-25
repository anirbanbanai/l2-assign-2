import { Request, Response } from "express";
import { UsersService } from "./users.service";
import { OrdersSchema, UsersInterfaceValidationSchema } from "./users.zod.validation";

const createUsers = async (req: Request, res: Response) => {
  try {

    const users = req.body.users;
    const zodParseData = UsersInterfaceValidationSchema.parse(users)
    const result = await UsersService.creatUserIntoDb(zodParseData);

    const {
      userId,
      username,
      fullName,
      age,
      email,
      isActive,
      hobbies,
      address,
    } = result;

    const resultOutPass = {
      userId,
      username,
      fullName,
      age,
      email,
      isActive,
      hobbies,
      address,
    };

    res.status(200).json({
      success: true,
      message: "User is created successfully",
      data: resultOutPass,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UsersService.getAllUserFromDb();

    res.status(200).json({
      success: true,
      message: "User is created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UsersService.getSingleUserFromDb(userId);

    res.status(200).json({
      success: true,
      message: "Student fetch  successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const updatedData = req.body;

    await UsersService.getUpdateUserData(userId, updatedData);

    res.status(200).json({
      success: true,
      message: "Student update  successfull",
      data: updatedData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};


const updateOrderSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const updatedData = req.body;
   const zodOrderValidate = OrdersSchema.parse(updatedData)
    await UsersService.getOrderUpdateUserData(userId, zodOrderValidate);

    res.status(200).json({
      success: true,
      message: "Student update  successfull",
      data: updatedData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UsersService.deleteSingleUserFromDb(userId);

    res.status(200).json({
      success: true,
      message: "Student fdelete successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

export const UserController = {
  createUsers,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
  updateOrderSingleUser
};
