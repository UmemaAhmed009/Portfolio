import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Footer } from "./components/Footer"
import { AboutMe } from "./components/AboutMe"


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
      {/* <h1>Hello, world!</h1> */}
    </div>
  )
}

export default App