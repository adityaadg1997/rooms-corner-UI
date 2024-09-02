import React, { useEffect, useState } from "react";
import { getAllHotels } from "../../API/Services/HotelService/RestrictedApi/HotelApi";
import CardComponent from "../../Components/Cards/Card/CardComponent";
import CardSliderComponent from "../../Components/Cards/CardSlider/CardSliderComponent";

const HotelsListPage = () => {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    loadAllHotels();
  }, []);

  const loadAllHotels = async () => {
    try {
      const response = await getAllHotels();
      console.log("Fetched successfully all hotels data:", response);
      // setting hotel list, so that we can use further from useState
      setHotelList(response);
    } catch (error) {
      console.log("Failed to fetch, all hotels:", error);
    }
  };

  return (
    <>
    <div>{hotelList && <CardSliderComponent cardsData={hotelList} />}</div>

    <div>Single Card Data</div>
    {hotelList && hotelList.map((hotel) => (
      <CardComponent key={hotel.hotelId} cardData={hotel}/>
    ))}
    </>
  );
};

export default HotelsListPage;
