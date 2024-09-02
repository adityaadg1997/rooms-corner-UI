import React from "react";
import Base from "../../Components/Base/Base";
import CardSliderComponent from "../../Components/Cards/CardSlider/CardSliderComponent";
import CardComponent from "../../Components/Cards/Card/CardComponent";
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
import SearchBar from "../../Components/Search/SearchBar/SearchBar";
import Footer from "../../Components/Footer/Footer";
import HotelsListPage from "../Hotels/HotelsListPage";

const Home = () => {
  // const cardsData = [
  //   {
  //     title: "Veena Sadan",
  //     location: "United Kingdom, Isle Of Skye",
  //     rating: 9.0,
  //     reviewCount: 149,
  //     image: a,
  //   },
  //   {
  //     title: "Waldschenke Stendenitz Übernachten im Wald am See",
  //     location: "Germany, Neuruppin, ",
  //     rating: 9.4,
  //     reviewCount: 62,
  //     image: b,
  //   },
  //   {
  //     title: "Domki ROSSE niedaleko plaży",
  //     location: "Poland, Jastrzębia Góra",
  //     rating: 9.8,
  //     reviewCount: 134,
  //     image: c,
  //   },
  //   {
  //     title: "Casaprisco",
  //     location: "Netherlands, Putten",
  //     rating: 9.2,
  //     reviewCount: 77,
  //     image: d,
  //   },
  //   {
  //     title: "Harbor View 1",
  //     location: "United Kingdom, Isle Of Skye",
  //     rating: 9.0,
  //     reviewCount: 149,
  //     image: e,
  //   },
  //   {
  //     title: "Casa Rural La Marquesa",
  //     location: "Spain, Valera de Abajo",
  //     rating: 9.4,
  //     reviewCount: 62,
  //     image: f,
  //   },
  //   {
  //     title: "Domki ROSSE niedaleko plaży 1",
  //     location: "Poland, Jastrzębia Góra",
  //     rating: 9.8,
  //     reviewCount: 134,
  //     image: g,
  //   },
  //   {
  //     title: "Casaprisco 1",
  //     location: "Netherlands, Putten",
  //     rating: 9.2,
  //     reviewCount: 77,
  //     image: h,
  //   },
  //   {
  //     title: "Casaprisco 2",
  //     location: "Netherlands, Putten",
  //     rating: 9.2,
  //     reviewCount: 77,
  //     image: i,
  //   },
  //   {
  //     title: "Casaprisco 3",
  //     location: "Netherlands, Putten",
  //     rating: 9.2,
  //     reviewCount: 77,
  //     image: j,
  //   },
  // ];

  // const cData = {
  //   title: "Veena Sadan",
  //   location: "United Kingdom, Isle Of Skye",
  //   rating: 9.0,
  //   reviewCount: 149,
  //   image: a,
  // };

  return (
    <>
      <Base />
      <SearchBar />
      {/* <CardSliderComponent cardsData={cardsData} />
      <div>
        <CardComponent cardData={cData} />
      </div>
      <div>
        <CardComponent cardData={cData} />
      </div> */}
      <div>
        <HotelsListPage />
      </div>
      <Footer />
    </>
  );
};

export default Home;
