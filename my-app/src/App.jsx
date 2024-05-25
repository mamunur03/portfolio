import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Clubs from './components/clubs/Clubs'
import Achievements from './components/achievements/Achievements' 


const App = () => {
  return (
    <><Header/>
    <Nav/>
    <About/>
   
    <Experience/>
    <Projects/>
      <Clubs />
      <Achievements/>
    <Contact/>
    
    
    </>
    
  )
}

export default App