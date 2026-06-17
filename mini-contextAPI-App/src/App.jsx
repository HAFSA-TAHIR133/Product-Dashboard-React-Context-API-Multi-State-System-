import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Setting from './pages/setting'
import Analytics from './pages/analytics'
import NewProduct from './components/newProduct'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/new-product' element={<NewProduct />} />
      </Routes>
    </>
  )
}

export default App
