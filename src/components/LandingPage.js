import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  // Set default values for checkIn and checkOut
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [state, setState] = useState({
    checkIn: today.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
    checkOut: tomorrow.toISOString().split('T')[0], // Format as 'YYYY-MM-DD'
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const { checkIn, checkOut, adults, children, rooms } = state;
    if (!checkIn || !checkOut || !adults || !rooms) return alert("Please fill all fields");
    navigate(`/room-list?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`);
  };

  return (
    <div className="container">
      
      {/* Booking Form */}
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-md-push-5">
                <div className="booking-cta">
                  <img src="logo_oasis_nav.png" alt="Oasis Logo" className="img-fluid mb-4" />
                  <h1>Make your reservation</h1>
                  <p>
                      Indulge in Luxury, Embrace Comfort: Your Unforgettable Stay Begins Here.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-md-pull-7">
                <div className="booking-form">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check In</span>
                          <input className="form-control" type="date" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check out</span>
                          <input className="form-control" type="date" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Rooms</span>
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Adults</span>
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <span className="form-label">Children</span>
                          <select className="form-control">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="submit-btn" type="button" onClick={handleSearch}>Check availability</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;