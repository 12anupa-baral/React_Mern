import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)
  const name ="Anupa"

  return (
   
    <BrowserRouter >
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route  path='/contact' element={<Contact/>}/>
    
   </Routes>
    </BrowserRouter>
  )
}

export default App  
