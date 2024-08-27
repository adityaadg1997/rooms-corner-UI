// import React, { useEffect, useState } from 'react';
// import { getHotels, getLocation } from '../../API/api';

// const Hotels = () => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const locationFromUserInput = "https://www.google.com/";
//         const location = await getLocation(locationFromUserInput); // Fetch the location from the backend API
//         const data = await getHotels(location);
//         setHotels(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <div>
//       {hotels.map((hotel) => (
//         <div key={hotel.id}>
//           <h3>{hotel.name}</h3>
//           <p>{hotel.location}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Hotels;