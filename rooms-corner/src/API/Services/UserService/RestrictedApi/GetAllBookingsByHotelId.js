import { restrictedApi } from "../../../Helper/helper";

export const getAllBookingsByHotelId = async (hotelId) => {
  try {
    const response = await restrictedApi.get(`/user/booking/hotel/${hotelId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Bookings");
  }
};
