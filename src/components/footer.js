import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-white text-dark text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Oasis-A Luxury Resort | Designed by DevDynamos
        </p>
      </div>
    </footer>
  );
};

export default Footer;