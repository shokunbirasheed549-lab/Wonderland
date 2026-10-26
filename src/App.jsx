import React, { useState } from 'react'
import Home from './Pages/Home'
import "./Test.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBarMenu from './Components/Navbar'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import About from './Pages/About'
import Service from './Pages/Service'



const App = () => {
  const [cartItems, setCartItems] = useState([]);

      function addToCart(food) {
        let newCart=[];
        let foodFound = false;

        for(let i = 0; i < cartItems.length; i++) {
         let updateFood = {
          id: cartItems[i].name,
          name: cartItems[i].name,
          price: cartItems[i].price,
          image : cartItems[i].image,
          description : cartItems[i].description,
          quantity: cartItems[i].quantity +1,
         }
         newCart.push(updateFood);
         foodFound=true;
           }
           


      }

        

  return (
     
       
      <BrowserRouter>
      <NavBarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
