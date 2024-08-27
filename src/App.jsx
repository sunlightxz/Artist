import { useState } from 'react'
import Hero from './pages/Hero'
import Nav from './components/Nav'
import About from './pages/About'
import Projects from './pages/Projects'
import More from './pages/More'


function App() {

  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <More/>
    </>
  )
}

export default App
