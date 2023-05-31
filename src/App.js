import React, { useState } from 'react'
import Projects from './components/Projects'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import About from './components/About'
import BottomBar from './components/BottomBar'

const App = () => {

  const [openForm, setOpenForm] = useState(false)

  return (
    <>
      <TopBar setOpenForm={setOpenForm} openForm={openForm}/>
      <Hero />
      <About />
      <Projects />
      <BottomBar />
    </>
  )
}

export default App
