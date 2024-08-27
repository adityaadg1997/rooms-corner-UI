

// export const logout = async () => {
//   try {
//     await axios.post(`${API_URL}/auth/logout`);
//   } catch (error) {
//     console.error(error);
//     throw new Error("Logout failed");
//   }
// };

// export const getBookings = async (userId) => {
//   try {
//     const response = await axios.get(`${API_URL}/bookings/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch bookings");
//   }
// };

// export const getHotels = async (location) => {
//   try {
//     const response = await axios.get(`${API_URL}/hotels?location=${location}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch hotels");
//   }
// };

// export const getLocation = async (location) => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/location?locationId=${location}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch location");
//   }
// };
