import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/HomePage/Hero'
// import  Footer from '../Components/Footer'
import PorpularDish from '../Components/HomePage/PopularDish'

const Home = ({ onAddToCart }) => {
  return (
    <div>

      <Hero />
      <PorpularDish onAddToCart={onAddToCart} />
   
    </div>
  )
}

export default Home
