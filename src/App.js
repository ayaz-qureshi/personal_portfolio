import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Socials from './components/Socials'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Home/>
      <Socials/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
