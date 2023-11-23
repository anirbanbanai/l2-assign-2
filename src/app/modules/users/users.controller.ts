import { Request, Response } from "express";
import { UsersService } from "./users.service";

const createUsers = async(req: Request, res: Response)=>{
    try {

        const users = req.body.users;
        const result = await UsersService.creatUserIntoDb(users);

        res.status(200).json({
            success: true,
            message: 'User is created successfully',
            data: result,
          });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
          });
    }
}