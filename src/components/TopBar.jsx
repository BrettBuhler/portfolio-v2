import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm'
import gitHub from '../images/icons8-github-48.png'
import linkedIn from '../images/icons8-linkedin-40.png'
import '../styles/TopBar.css'

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

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about');
    const projectsElement = document.getElementById('projects');

    const scrollPosition = window.scrollY;

    const homeOffsetTop = homeElement.offsetTop;
    const aboutOffsetTop = aboutElement.offsetTop;
    const projectsOffsetTop = projectsElement.offsetTop;

    // Define the threshold value where you want to consider the user as in a section
    const threshold = 100; // Change this value as per your requirement

    if (scrollPosition < aboutOffsetTop - threshold) {
      setActiveSection('home');
    } else if (scrollPosition < projectsOffsetTop - threshold) {
      setActiveSection('about');
    } else {
      setActiveSection('projects');
    }
  };

  const handleSectionClick = (section) => {
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
            className={activeSection === 'home' ? 'button active' : 'button'}
            onClick={() => handleSectionClick('home')}
          >
            Home
            {activeSection === 'home' && <span style={indicatorStyles}></span>}
          </button>
          <button
            onClick={() => handleSectionClick('about')}
            className={activeSection === 'about' ? 'button active' : 'button'}
          >
            About
            {activeSection === 'about' && <span style={indicatorStyles}></span>}
          </button>
          <button
            onClick={() => handleSectionClick('projects')}
            className={activeSection === 'projects' ? 'button active' : 'button'}
          >
            Projects
            {activeSection === 'projects' && <span style={indicatorStyles}></span>}
          </button>
          <button
            className='button'
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