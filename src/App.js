import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HotelLandingPage from './components/LandingPage';
import RoomListPage from './components/RoomListPage';
import Contact from './components/ContactUs';
import AboutUs from './components/AboutUs';
import BookingPage from './components/BookingPage';
import BookingState from "./Context/noteState";
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import Records from './components/Records';
import Footer from './components/footer';

function App() {
  return (
    <BookingState>
      <Router>
        <Navigation />
        <Routes>
                <Route path="/" element={<HotelLandingPage />} />
                <Route path="/room-list" element={<RoomListPage />} />
                <Route path="/ContactUs" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/records" element={<Records />} />
        </Routes>
        <Footer />
      </Router>
    </BookingState>
  );
}

export default App;