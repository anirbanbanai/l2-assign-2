import { UsersInterface } from "./users.interface";
import { UserModels } from "./users.models";

const creatUserIntoDb = async(user: UsersInterface)=>{
    const result = await UserModels.create(user);
    return result;
}

const getAllUserFromDb = async () => {
    const result = await UserModels.aggregate([{$project:{age: 1,userId: 1,fullName:1,email:1,isActive: 1, hobbies: 1, address: 1}}]);
    return result;
  };

  const getSingleUserFromDb = async (id: string) => {
    const result = await UserModels.aggregate([
        {
            $match:{
                userId: parseFloat(id),
            }
        },
        {
            $project:{
                username: 1,
                fullName: 1,
                age: 1,
                email:1,
                address: 1
            }
        }
    ]);
    return result;
  };

  const getUpdateUserData = async (id: string, updatedData: Partial<UsersInterface>) => {
    
    const result = await UserModels.updateOne({ userId: id }, { $set: updatedData });
  
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
    getUpdateUserData,
    deleteSingleUserFromDb
}