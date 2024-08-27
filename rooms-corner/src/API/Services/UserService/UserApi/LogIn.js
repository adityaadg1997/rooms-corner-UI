import { userApi } from "../../../Helper/helper";

export const userLogin = async (credentials) => {
  try {
    const response = await userApi.post(`/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Login failed");
  }
};
