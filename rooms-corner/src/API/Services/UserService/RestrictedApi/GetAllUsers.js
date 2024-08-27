import { restrictedApi } from "../../../Helper/helper";

export const GetAllUsers = async () => {
  try {
    const response = await restrictedApi.get(`/user/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch all users");
  }
};
