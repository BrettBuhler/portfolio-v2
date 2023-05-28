import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm'
import gitHub from '../images/icons8-github-48.png'
import linkedIn from '../images/icons8-linkedin-40.png'

const TopBar = () => {
  const [showTopBar, setShowTopBar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowTopBar(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    // Scroll to the corresponding section on the page
    // You can implement the scrolling functionality here
  };

  const handleOpenContactForm = () => {
    setShowContactForm(true)
  }

  const topBarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Updated to evenly space items
    background: showTopBar ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    borderBottom: showTopBar ? '2px solid #ffffff' : 'none',
    transition: 'background 0.3s ease, border 0.3s ease',
    zIndex: 999,
  };

  const indicatorStyles = {
    width: '4px',
    height: '100%',
    background: '#ffffff',
  };

  const buttonStyles = {
    padding: '0 10px',
    height: '30px',
    cursor: 'pointer',
    color: '#ffffff',
    marginRight: '10px',
    marginLeft: '10px',
    textDecoration: 'none', // Remove default underline
    transition: 'transform 0.3s ease', // Added transition for transform effect
    border: '2px solid white',
    background: 'black'
  };
  
  const buttonHoverStyles = {
    transform: 'scale(1.1)',
    color: '#000000',
    background: 'white',
  };

  const iconStyles = {
    hight: '30px',
    width: '30px',
    marginRight: '20px',
    border: '2px solid white',
    background: '#006DFF',
  };

  return (
    <div>
      <div style={topBarStyles}>
        <div>
          <button
            style={buttonStyles}
            onClick={() => handleSectionClick('home')}
          >
            Home
            {activeSection === 'home' && <span style={indicatorStyles}></span>}
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleSectionClick('about')}
          >
            About
            {activeSection === 'about' && <span style={indicatorStyles}></span>}
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleSectionClick('projects')}
          >
            Projects
            {activeSection === 'projects' && <span style={indicatorStyles}></span>}
          </button>
          <button
            style={buttonStyles}
            onClick={() => handleOpenContactForm()}
          >
            Contact
            {activeSection === 'contact' && <span style={indicatorStyles}></span>}
          </button>
        </div>
        <div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" style={iconStyles} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn" style={iconStyles} />
          </a>
        </div>
      </div>
      {showContactForm && <ContactForm openForm={handleOpenContactForm}/>}
</div>
  )}

  export default TopBar