import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesTo,
} from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LogInPage from "../Pages/LogIn/LogInPage";
import RegisterPage from "../Pages/SignUp/RegisterPage";
import BookingListByHotelPage from "../Pages/UserDashboard/BookingListByHotelPage";
import UserDetailsPage from "../Pages/UserDashboard/UserDetailsPage";
import Navbar from "../Components/Header/Navbar";
import UserListPage from "../Pages/UserDashboard/UserListPage";
import BookingsPage from "../Pages/Bookings/BookingsPage";
import QrCodePage from "../Pages/Payment/QrCodePage";
import LargeCard from "../Components/Cards/LargeCard/LargeCard";

function Routes() {
  return (
    <>
      <Router>
        <RoutesTo>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/findUserInfo" element={<UserDetailsPage />} />
          <Route path="/allBookingByHotel" element={<BookingListByHotelPage />} />
          <Route path="/header" element={<Navbar />} />
          <Route path="/userList" element={<UserListPage />} />
          <Route path="/bookingDetails" element={<BookingsPage />} />
          <Route path="/qrCode" element={<QrCodePage />} />
          <Route path=":hotelId" element={<LargeCard />} />
        </RoutesTo>
      </Router>
    </>
  );
}

export default Routes;
