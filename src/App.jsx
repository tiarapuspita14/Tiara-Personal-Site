import React from 'react'
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import About from "./components/About";





const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
