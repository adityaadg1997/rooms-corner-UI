import { restrictedApi } from "../../../Helper/helper";

export const getUserById = async (userId) => {
  try {
    const response = await restrictedApi.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch User");
  }
};