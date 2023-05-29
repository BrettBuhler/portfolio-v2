import React, { useState } from 'react';
import Projects from './components/Projects';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import About from './components/About';

const App = () => {

  const [openForm, setOpenForm] = useState(false)

  return (
    <>
      <TopBar setOpenForm={setOpenForm} openForm={openForm}/>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default App;
