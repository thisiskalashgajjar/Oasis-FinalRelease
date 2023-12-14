import React, { useState } from 'react';

const ContactForm = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };


  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is a required field.
        </>
      );
    } else {
      if (field === 'email') {
        if (!isValidEmail(value)) return 'Invalid Email.';
      }
      else {
        return '';
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidated = true;

    Object.keys(contactData).forEach((key) => {
      const value = contactData[key];
      const validationError = validateField(key, value);

      if (validationError) {
        setErrorMsg(validationError);
        isValidated = false;
      }
    });

    if (isValidated) {
      try {
        const response = await fetch('https://formspree.io/f/xleyqowg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });

        if (response.ok) {
          // Handle success, e.g., show a success message
          setSuccessMsg(true);
          console.log('Form submitted successfully');
        } else {
          // Handle error, e.g., show an error message
          setSuccessMsg(false);
          console.error('Form submission failed');
        }
      } catch (error) {
        setSuccessMsg(false);
        console.error('Error submitting form:', error);
      }
    } else {
      setSuccessMsg(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="bg-light p-5 rounded shadow">
        <center><h1 style={{fontFamily: 'cursive'}}><b>Contact Us</b></h1></center>
        <br />
          <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
            {!successMsg ? (
              <>
                <div id="errormessage" className={errorMsg ? 'text-danger mb-4' : 'hidden'}>
                  {errorMsg}
                </div>
                <div className="mb-4">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={contactData.name || ''}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={contactData.email || ''}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    value={contactData.message || ''}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                    rows="3"
                  />
                </div>
                <div className="text-right mb-4">
                  <button type="submit" className="btn btn-primary">
                    Submit Now
                  </button>
                </div>
              </>
            ) : (
              <div className="text-success" id="sendmessage">
                Thank you for your message. We will contact you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;