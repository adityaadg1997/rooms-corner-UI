import { userApi } from "../../../Helper/helper";

export const registerUser = async (newUserData, userRole) => {
    try {
      const response = await userApi.post(`/user/register/${userRole.userRole}`, newUserData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Registration failed");
    }
  };