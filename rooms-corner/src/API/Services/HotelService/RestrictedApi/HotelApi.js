import { restrictedApi } from "../../../Helper/helper";

export const addHotel = async (hotelData) => {
  try {
    const response = await restrictedApi.post(`/hotel/`, hotelData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add new hotel");
  }
};

export const getHotelById = async (hotelId) => {
  try {
    const response = await restrictedApi.get(`/hotel/${hotelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch hotel");
  }
};

export const getHotelByLocationId = async (locationId) => {
  try {
    const response = await restrictedApi.get(`/hotel/${locationId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch hotel at this location");
  }
};

export const getAllHotels = async () => {
  try {
    const response = await restrictedApi.get(`/hotel/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch all hotels");
  }
};
