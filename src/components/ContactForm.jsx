import React, { useState, useRef } from 'react'
import Error from './Error'
import '../styles/ContactForm.css'
import emailjs from '@emailjs/browser'

const ContactForm = ({ openForm, setOpenForm }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])

  const emailKey = process.env.REACT_APP_EMAIL_KEY

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = []
    if (name === ''){
      errors.push('Please input your name.')
    }
    if (email === ''){
      errors.push('Please input your email.')
    }
    if (message === ''){
      errors.push('Please input a message.')
    }

    if (errors.length === 0){
      emailjs.sendForm('service_2t56uvn', 'template_l7r9ynn', form.current, emailKey)
        .then((res) => {
          if (res.text === 'OK'){
            setIsSubmitted(true)
          } else {
            errors.push('Error contacting server, try again later')
            setErrorMessage(errors)
            setError(true)
          }
        })
    } else {
      setErrorMessage(errors)
      setError(true)
    }
  };

  const handleClosePopup = () => {
    setIsSubmitted(false)
    setName('')
    setEmail('')
    setMessage('')
    setOpenForm(false)
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      handleClosePopup()
    }
  };
  return (
    <>
      {openForm && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-container">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit} ref={form}>
                <h2>Contact Form</h2>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Name"
                  id="name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  id="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  className="form-textarea"
                  placeholder="Message"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <div className='form-bottom-buttons'>
                  <button type="submit" className="form-button form-button-submit" value="Send">
                    Submit
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="form-button form-button-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="confirmation-screen">
                <h2>Thank you for reaching out <a className='user-info'>{name}</a>!</h2>
                <p>I'll get back to you at <a className='user-info'>{email}</a> as soon as possible</p>
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
      <Error message={errorMessage} setMessage={setErrorMessage} error={error} setError={setError}/>
    </>
  )
}

export default ContactForm