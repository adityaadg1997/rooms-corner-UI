import { restrictedApi } from "../../../Helper/helper";

export const createOrder = async (paymentRequest) => {
    try {
      const response = await restrictedApi.post(`/payment/create/order`, paymentRequest);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to Payment for this order");
    }
  };