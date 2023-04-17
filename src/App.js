import React from 'react'
import Navlinks from './Components/Navlinks'
import About from './Components/About'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Tours from './Components/Tours'
import Footer from './Components/Footer'

const App = () => {
  return (
    <React.Fragment>
    <Navlinks />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
    </React.Fragment>
  )
}

export default App
