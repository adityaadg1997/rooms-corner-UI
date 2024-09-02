import { restrictedApi } from "../../../Helper/helper";

export const getHotelImageUrls = async (hotelId) => {
  try {
    const response = await restrictedApi.get(
      `/hotel/${hotelId}/media/download`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to load hotel image urls list");
  }
};

// Helper function to get image URL with token authorization -> calling downloadImage
export const getImageUrlWithToken = async (imageUrl) => {
  try {
    const response = await restrictedApi.get(`${imageUrl}`, {
      responseType: "blob",
    });
    const imageUrlWithToken = URL.createObjectURL(response.data);
    return imageUrlWithToken;
  } catch (error) {
    console.error("Failed to fetch image with token:", error);
    return null;
  }
};

{/* call this method and pass hotelId to get all the image urls and pass on src of <img src>*/}
export const getHotelImageUrlsByHotelId = async (hotelId) => {
  try {
    const response = await getHotelImageUrls(hotelId);
    // Fetch images with token
    const blobImageUrlsWithToken = await Promise.all(
      response && response.map((imageUrl) => getImageUrlWithToken(imageUrl))
    );
    // setImages(blobImageUrlsWithToken);
    return blobImageUrlsWithToken;
  } catch (error) {
    console.error("Failed to load Hotel Image Urls By Hotel Id:", error);
    return null;
  }
};
