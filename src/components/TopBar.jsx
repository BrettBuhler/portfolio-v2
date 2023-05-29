import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm'
import gitHub from '../images/icons8-github-48.png'
import linkedIn from '../images/icons8-linkedin-40.png'
import '../styles/TopBar.css'
import topBarBackground from '../images/laser-lights-light-beams-long-exposure-rays-reflection-3840x2160-4628.jpg'

const TopBar = ({ setOpenForm, openForm }) => {
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
    const scrollTo = document.getElementById(section);
    if (scrollTo) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      };
  
      const scrollContainer = document.documentElement || document.body;
      const startPosition = scrollContainer.scrollTop;
      const targetPosition = scrollTo.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 800
  
      let startTimestamp = null;
  
      const scrollStep = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
  
        const easeInOutQuad = (t) => {
          t /= duration / 2;
          if (t < 1) return (distance / 2) * t * t + startPosition
          t--;
          return (-distance / 2) * (t * (t - 2) - 1) + startPosition
        };
  
        const scrollToPosition = easeInOutQuad(progress)
  
        scrollContainer.scrollTop = scrollToPosition
  
        if (progress < duration) {
          window.requestAnimationFrame(scrollStep)
        }
      };
  
      window.requestAnimationFrame(scrollStep)
    }
  };

  const handleOpenContactForm = () => {
    setShowContactForm(true)
    setOpenForm(true)
  }

  const topBarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: showTopBar ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
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
    textDecoration: 'none',
    transition: 'transform 0.3s ease', 
    border: '2px solid white',
    borderRadius: '5px',
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
    borderRadius: '5px',
  };

  return (
    <div>
      <div style={topBarStyles}>
        <div>
          <button
            style={{...buttonStyles, ...buttonHoverStyles}}
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
      {showContactForm && <ContactForm openForm={openForm} setOpenForm={setOpenForm}/>}
</div>
  )}

  export default TopBar