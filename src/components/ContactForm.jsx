import React, { useState } from 'react';

const ContactForm = ({ openForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform form validation here before submitting the data

    // Simulating form submission with a timeout
    setTimeout(() => {
      setIsSubmitted(true);
    }, 2000);
  };

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      handleClosePopup();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-container">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Form</h2>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className="form-textarea"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="form-button form-button-submit">
                  Submit
                </button>
                <button
                  onClick={handleClosePopup}
                  className="form-button form-button-cancel"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className="confirmation-screen">
                <h2>Thank you for your submission!</h2>
                <p>We will get back to you soon.</p>
                <button
                  onClick={handleClosePopup}
                  className="form-button form-button-close"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;