import React from "react";
import { createOrder, updateOrder } from "../../API/Services/PaymentService/RestrictedApi/paymentApi";
import { useNavigate } from "react-router-dom";

const PaymentDetails = (props) => {
  const navigate = useNavigate();
  const orderData = {
    amount: "",
    info: "",
  };

  const handleProccedToPay = () => {
    orderData.amount = props.price;
    orderData.info = props.allData;
    const order = createOrderForPayment(orderData);
    console.log("paymentRequest ::", order);
  };

  const createOrderForPayment = async (paymentRequest) => {
    try {
      const response = await createOrder(paymentRequest);
      console.log("Payment successfully created :", response);

      if (response.status === "created") {
        //open payment form
        handlePayment(response, paymentRequest.info);
      }
    } catch (error) {
      console.log("Failed to make payment for this order:", error);
    }
  };

  const handlePayment = (response, paymentInfo) => {
    const options = {
      key: "rzp_test_K1BP3qb1cpaxw6", // Enter the Key ID generated from the Dashboard
      amount: `${response.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Rooms Corner Pvt Ltd",
      description: "Test Transaction",
      image:
        "https://images.unsplash.com/photo-1622964318124-d87cb88d24e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      order_id: `${response.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) { //after successful payment, save to DB
        // alert(`Payment ID: ${response.razorpay_payment_id}`);
        // alert(`Order ID: ${response.razorpay_order_id}`);
        // alert(`Signature: ${response.razorpay_signature}`);
      
        updatePaymentOnDB(response.razorpay_order_id, response.razorpay_payment_id, 'Paid', response.razorpay_signature);
        navigate("/");
      },
      prefill: {
        name: `${paymentInfo.name}`,
        email: `${paymentInfo.email}`,
        contact: "",
      },
      notes: {
        address: "Rooms Corner Pvt Ltd, Bangalore, India",
      },
      theme: {
        color: "#3399cc",
      },
    };

    console.log("Payments OPTIONS REQUEST ::", options);

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(`Code: ${response.error.code}`);
      alert(`Description: ${response.error.description}`);
      alert(`Source: ${response.error.source}`);
      alert(`Step: ${response.error.step}`);
      alert(`Reason: ${response.error.reason}`);
      alert(`Order ID: ${response.error.metadata.order_id}`);
      alert(`Payment ID: ${response.error.metadata.payment_id}`);
    });

    rzp1.open();
  };


  const updatePaymentOnDB = async (orderId, paymentId, status, signature) => {
    try {
      const paymentData = {"razorpay_order_id":orderId,"razorpay_payment_id":paymentId, "status":status,"razorpay_signature":signature};
      const response =  await updateOrder(paymentData);
      console.log("order status, paymentId updated", response);
    } catch (error) {
      console.log("Something went wrong while updating order status, paymentId !!", error);
    }
  }

  return (
    <div className="payment-details">
      <h2>Payment Details</h2>
      <div className="payment-item">
        <p>Item Price</p>
        <span>{props.price}</span>
      </div>
      <div className="payment-item">
        <p>Discount</p>
        <span>0</span>
      </div>
      <div className="payment-item total">
        <p>TOTAL</p>
        <span>{props.price}</span>
      </div>
      <button onClick={handleProccedToPay} className="proceed-to-pay">
        Proceed To Pay
      </button>
    </div>
  );
};

export default PaymentDetails;
