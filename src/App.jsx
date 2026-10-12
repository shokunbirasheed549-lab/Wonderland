import React from 'react'
import Home from './Pages/Home'
import "./Test.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBarMenu from './Components/Navbar'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'



const App = () => {
  return (
    
       
      <BrowserRouter>
      <NavBarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          

        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
