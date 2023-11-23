import { UsersInterface } from "./users.interface";
import { UserModels } from "./users.models";

const creatUserIntoDb = async(user: UsersInterface)=>{
    const result = await UserModels.create(user);
    return result;
}

const getAllUserFromDb = async () => {
    const result = await UserModels.find();
    return result;
  };

export const UsersService = {
    creatUserIntoDb,
    getAllUserFromDb
}