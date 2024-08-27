import React, { useEffect, useState } from "react";
import Base from "../../Components/Base/Base";
import { restrictedApi } from "../../API/Helper/helper";
import LargeCard from "../../Components/Cards/LargeCard/LargeCard";
import a from "./assets/cardsAssets/1.jpg";
import b from "./assets/cardsAssets/2.jpg";
import c from "./assets/cardsAssets/3.jpg";
import d from "./assets/cardsAssets/4.jpg";
import e from "./assets/cardsAssets/5.jpg";
import f from "./assets/cardsAssets/6.jpg";
import g from "./assets/cardsAssets/7.jpg";
import h from "./assets/cardsAssets/8.jpg";
import i from "./assets/cardsAssets/9.jpg";
import j from "./assets/cardsAssets/10.jpg";
import AmenitiesCard from "../../Components/Facilities/AmenitiesCard";
import SearchBar from "../../Components/Search/SearchBar/SearchBar";
import Footer from "../../Components/Footer/Footer";
import AccordionComponent from "../../Components/Accordion/AccordionComponent"
// import BookingDetails from "../../Components/Demo/Test Card 1/BookingDetails";
// import BookingForm from "../../Components/Demo/Test Card 2/BookingForm";
// import BookingDetails3 from "../../Components/Demo/Test Card 3/BookingDetails";
// import BookingDetails4 from "../../Components/Demo/Test Card 4/BookingDetails";


const UserListPage = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await restrictedApi.get(
  //       "/hotel/47848411-a060-47c5-9e4d-191fd41575d6"
  //     );
  //     setData(result.data);
  //   }
  //   fetchData();
  // }, []);

  // const userData = {
  //   hotelName: "aaa",
  // }

  // useEffect(() => {
  //   async function postData() {
  //     const result = await restrictedApi.post(
  //       `/hotel/`, userData
  //     );
  //     setData(result.data);
  //   }
  //   postData();
  // }, []);

  const multiImage = [
    {
      image: a,
    },
    {
      image: c,
    },
    {
      image: e,
    },
    {
      image: g,
    },
    {
      image: i,
    },
    {
      image: "https://images.unsplash.com/photo-1713707131810-d53b3b1ecced?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <Base />
      <div>UserListPage</div>
      <LargeCard
        title={data.hotelName}
        location={"Brookefield, Bengulure 560103"}
        hotelImages={multiImage}
      />

      <AmenitiesCard />

      {/* <BookingDetails /> */}

      {/* <BookingForm /> */}

      {/* <BookingDetails3 /> */}

      {/* <BookingDetails4 /> */}

      {/* <SearchBar /> */}

      <AccordionComponent />


      <Footer />


    </>
  );
};

export default UserListPage;
