import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function BookingPage() {
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

  const [bookingReference, setBookingReference] = useState('');
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);


  const generateBookingReference = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handlePaymentComplete = (orderID) => {
    // Handle logic after payment is completed (e.g., update database)
    console.log('Payment completed! Order ID:', orderID);
    const referenceNumber = generateBookingReference();
    setBookingReference(referenceNumber);
    setIsPaymentComplete(true);

    // Additional logic to update your backend with booking details
    handleSubmit(referenceNumber);
  };

  const basePrice = queryParams.get('roomPrice');
    const taxRate = 0.13;
            const totalAmount = (basePrice * numNights) * (1 + taxRate);
  const [credentials, setCredentials] = useState({ name: "" });

  const handleSubmit = async (referenceNumber) => {
    const response = await fetch("http://localhost:5001/api/notes/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        noOfAdults: adults,
        noOfChildren: children,
        noOfRooms: numRooms,
        totalPrice: totalAmount,
        name: credentials.name,
        bookingReference: referenceNumber
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <div>
      {/* PayPal Integration */}
      <PayPalScriptProvider options={{ 'client-id': 'AW-sJ3KtXErqofDnXCrxd65UTiRoWIGKndzpaa0BJg4ITQHWuvGN50x0zYJuhpd9yoFUOm7FNXPA7dxP' }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            

            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount.toFixed(2),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              // Handle successful payment
              handlePaymentComplete(details.id);
            });
          }}
        />
      </PayPalScriptProvider>

      {isPaymentComplete && (
        <div className="mt-3">
          <h3>Payment Complete!</h3>
          <p>Booking Reference: {bookingReference}</p>
          {handleSubmit}
        </div>
      )}
    </div>
  );
}

export default BookingPage;
