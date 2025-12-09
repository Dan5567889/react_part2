import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Dante from './pages/Dante.jsx'
import Wilson from './pages/Wilson.jsx'
import Goals from './pages/Goals.jsx'
import Dummy from './components/Dummy.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
      <>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dummy/>}/>
        <Route path="/dante" element={<Dante/>}/>
        <Route path="/wilson" element={<Wilson/>}/>
        <Route path="/goals" element={<Goals/>}/>
      </Routes>
      </BrowserRouter>
        



      </>
  )
}

export default App
