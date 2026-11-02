import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Terms from './Pages/Terms'
import NavbarMenu from './Components/Navbar' // Ensure this filename matches your components folder!
import Home from './Pages/Home'
import About from './Pages/About'
import Checkout from './Pages/Checkout'
import OrderSuccess from './Pages/OrderSuccess'
import Services from './Pages/Service'
import Refund from './Pages/Refund'
import Delivery from './Pages/Delivery'
import OffersPromotions from './Pages/Offers'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Faqs from './Pages/Faqs'

const App = () => {
    // Optional: Load cart from localStorage so items don't reset on page refresh
    const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item or increment quantity if it already exists (using functional update)
    function addToCart(food) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === food.id);
        if (existingItem) {
          return prevItems.map(item => 
            item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...food, quantity: 1 }];
        }
      });
    }

    // Increase item quantity
    function increaseQuantity(id) {
      setCartItems(prevItems =>
        prevItems.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }

    // Decrease item quantity (removes item completely if quantity drops below 1)
    function decreaseQuantity(id) {
      setCartItems(prevItems =>
        prevItems
          .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
          .filter(item => item.quantity > 0)
      );
    }

    // Calculate total cart count for the navbar badge
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
   <BrowserRouter>
     <NavbarMenu cartCount={cartCount}/>
     <Routes>
       <Route path="/" element={<Home onAddToCart={addToCart}/>} />
       <Route path="/about" element={<About />} />
       <Route path="/cart" element={<Cart cartItems={cartItems} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onAddToCart={addToCart}/>} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/service" element={<Services/>} />
       <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
       <Route path="/terms" element={<Terms/>} />
       <Route path="/order-success" element={<OrderSuccess />} />
       <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
       <Route path='/privacy-policy' element={<PrivacyPolicy />} />
       <Route path='/faqs' element={<Faqs />} />
       <Route path='/refund' element={<Refund />} />
       <Route path='/delivery' element={<Delivery />} />
       <Route path='/offer' element={<OffersPromotions />} />
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App