import React, { useState, useEffect } from 'react';

const TopBar = () => {
  const [showTopBar, setShowTopBar] = useState(false);

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

  const topBarStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: showTopBar ? '#ffffff' : 'transparent',
    transform: showTopBar ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'background 0.3s ease, transform 0.3s ease',
    zIndex: 999,
  };

  return (
    <div style={topBarStyles}>
      {/* Your top bar content */}
      <h1>Top Bar</h1>
    </div>
  );
};

export default TopBar;