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

  const getSingleUserFromDb = async (id: string) => {
    const result = await UserModels.findOne({userId: id });
    return result;
  };
  const deleteSingleUserFromDb = async (id: string) => {
    const result = await UserModels.deleteOne({userId: id });
    return result;
  };

export const UsersService = {
    creatUserIntoDb,
    getAllUserFromDb,
    getSingleUserFromDb,
    deleteSingleUserFromDb
}