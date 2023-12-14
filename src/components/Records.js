import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import noteContext from '../Context/noteContext';

function Menu() {
  const context = useContext(noteContext);
  const { notes, getNotes, deleteBooking } = context;
  const navigate = useNavigate();

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const handleEdit = (bookingReference) => {
    // You can navigate to the contact us page or any other page for editing
    navigate(`/ContactUs`);
  };

  return (
    <div className="container">
      <div className="row mt-4" style={{ marginTop: '100px' }}>
        <div className="col-12" style={{ marginTop: '100px', padding: '0px 10px' }}>
          <table className="table table-striped table-hover text-center table-sm table-bordered bg-black" style={{ fontSize: 'medium' }}>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Check In Date</th>
                <th>Check Out Date</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Rooms</th>
                <th>Amount Paid</th>
                <th>Name</th>
                <th>Booking Reference</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{note.checkInDate}</td>
                  <td>{note.checkOutDate}</td>
                  <td>{note.noOfAdults}</td>
                  <td>{note.noOfChildren}</td>
                  <td>{note.noOfRooms}</td>
                  <td>{note.totalPrice}</td>
                  <td>{note.name}</td>
                  <td>{note.bookingReference}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm mx-1"
                      onClick={() => handleEdit(note.bookingReference)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Menu;
