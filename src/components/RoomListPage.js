import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

import StandardRoomImage from './images/standard-room.jpeg';
import DeluxeRoomImage from './images/deluxe-room.jpeg';
import SuiteRoomImage from './images/suite-room.jpeg';
import FamilyRoomImage from './images/family-room.jpeg';
import OceanViewRoomImage from './images/ocean-view.webp';
import ExecutiveSuite from './images/executive-suite.jpeg';
import PentHouse from './images/pent-house.jpeg';
import HoneymoonSuite from './images/honeymoon-suite.jpeg';
import BusinessClass from './images/business-class.webp';
import Villa from './images/villa.jpeg';

const roomDetails = [
  {
    type: 'Standard Room',
    price: 100,
    description: 'A comfortable room with essential amenities.',
    image: StandardRoomImage,
  },
  {
    type: 'Deluxe Room',
    price: 150,
    description: 'A spacious room with additional features for a luxurious stay.',
    image: DeluxeRoomImage,
  },
  {
    type: 'Family Room',
    price: 180,
    description: 'A room designed for families with extra space and child-friendly features.',
    image: FamilyRoomImage,
  },
  {
    type: 'Business Class Room',
    price: 180,
    description: 'Ideal for business travelers with a dedicated workspace and high-speed internet.',
    image: BusinessClass,
  },
  {
    type: 'Suite',
    price: 200,
    description: 'An exquisite suite with a separate living area and premium amenities.',
    image: SuiteRoomImage,
  },
  {
    type: 'Ocean View Room',
    price: 250,
    description: 'Enjoy a breathtaking view of the ocean from this room.',
    image: OceanViewRoomImage,
  },
  {
    type: 'Executive Suite',
    price: 300,
    description: 'Experience the epitome of luxury in our executive suite.',
    image: ExecutiveSuite,
  },
  {
    type: 'Honeymoon Suite',
    price: 400,
    description: 'Celebrate your special moments in our romantic honeymoon suite.',
    image: HoneymoonSuite,
  },
  {
    type: 'Penthouse',
    price: 500,
    description: 'Our most luxurious accommodation with stunning views and exclusive services.',
    image: PentHouse,
  },
  {
    type: 'Villa',
    price: 600,
    description: 'Indulge in ultimate privacy and luxury in our exclusive villa.',
    image: Villa
  },
];

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function RoomListPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const checkInDate = queryParams.get('checkIn');
  
  const checkOutDate = queryParams.get('checkOut');
  const adults = queryParams.get('adults');
  const children = queryParams.get('children');
  const numRooms = queryParams.get('rooms');
  const numNights = Math.ceil(
    (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set the delay for content rendering (in milliseconds)

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const handleBookNow = (roomType, price) => {
    // Navigate to the booking page with selected room type and other details
    navigate(`/booking?checkIn=${checkInDate}&checkOut=${checkOutDate}&adults=${adults}&children=${children}&rooms=${numRooms}&roomType=${roomType}&roomPrice=${price}`);
  };

  return (
    <Container className="my-4 text-center">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
          <ClipLoader color="#36D7B7" loading={loading} css={override} size={50} />
        </div>
      ) : (
        <>
          <h1 className={`fade-in ${loading ? 'hidden' : ''}`} style={{fontFamily: "cursive"}}>Available Rooms</h1>
          <Row>
            {roomDetails.map((room, index) => (
              <Col key={index} md={4} className="fade-in">
                <Card className="mb-4">
                  <Card.Img variant="top" src={room.image} alt={room.type} />
                  <Card.Body>
                    <Card.Title>{room.type}</Card.Title>
                    <Card.Text>{room.description}</Card.Text>
                    <Card.Text>Price: ${room.price} per night</Card.Text>
                    <Button onClick={() => handleBookNow(room.type, room.price)} variant="primary">
                      Book Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default RoomListPage;