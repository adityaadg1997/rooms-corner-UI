import { restrictedApi } from "../../../Helper/helper";

export const getAllLocation = async () => {
  try {
    const response = await restrictedApi.get(`/location/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch all locations");
  }
};