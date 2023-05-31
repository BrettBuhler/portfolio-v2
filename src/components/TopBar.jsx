import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import gitHub from '../images/icons8-github-48.png'
import linkedIn from '../images/icons8-linkedin-40.png'
import '../styles/TopBar.css'
import ReactGA from 'react-ga'

const TopBar = ({ setOpenForm, openForm }) => {
  const [showTopBar, setShowTopBar] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showContactForm, setShowContactForm] = useState(false)

  ReactGA.pageview(window.location.pathname)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowTopBar(scrollTop > 0)
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const aboutElement = document.getElementById('about');
    const projectsElement = document.getElementById('projects');

    const scrollPosition = window.scrollY;

    const aboutOffsetTop = aboutElement.offsetTop;
    const projectsOffsetTop = projectsElement.offsetTop;

    const threshold = 100;

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

  return (
    <div>
      <div style={topBarStyles} className='topBar'>
        <div className='topbar-button-container'>
          <button
            className={activeSection === 'home' ? 'button active item' : 'button item'}
            onClick={() => handleSectionClick('home')}
          >
            Home
          </button>
          <button
            onClick={() => handleSectionClick('about')}
            className={activeSection === 'about' ? 'button active item' : 'button item'}
          >
            About
          </button>
          <button
            onClick={() => handleSectionClick('projects')}
            className={activeSection === 'projects' ? 'button active item' : 'button item'}
          >
            Projects
          </button>
          <button
            className='button item'
            onClick={() => handleOpenContactForm()}
          >
            Contact
          </button>
        </div>
        <div className='topbar-link-container'>
          <a href="https://github.com/BrettBuhler" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" className='topbar-icon item'/>
          </a>
          <a href="https://www.linkedin.com/in/brett-buhler-a7522a1b6/" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn" className='topbar-icon item'/>
          </a>
        </div>
      </div>
      {showContactForm && <ContactForm openForm={openForm} setOpenForm={setOpenForm}/>}
</div>
  )}

  export default TopBar