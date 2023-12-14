// Navigation.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css';

const myStyle = {
    width: 200,
    height: 160,
};

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" variant="light">
              <Navbar.Brand as={Link} to="/">
                <img src="logo_oasis_nav.png" style={myStyle} alt="Oasis" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNav" />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" className="nav-link">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/room-list" className="nav-link">
                      Room Reservation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/ContactUs" className="nav-link">
                      Contact Us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/AboutUs" className="nav-link">
                      About Us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/records" className="nav-link">
                      MyBookings
                    </Nav.Link>
                  </Nav.Item>
                  {localStorage.getItem('token') ? (
                    <Nav.Item>
                      <Nav.Link as={Link} to="/logout" className="nav-link">
                        Logout
                      </Nav.Link>
                    </Nav.Item>
                  ) : (
                    <Nav.Item>
                      <Nav.Link as={Link} to="/login" className="nav-link">
                        <button className="btn">Login</button>
                      </Nav.Link>
                    </Nav.Item>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}