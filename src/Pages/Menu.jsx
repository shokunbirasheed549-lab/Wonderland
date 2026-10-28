import React from 'react'
import FoodCard from "../Components/FoodCard";
import  Food  from "../data/Food";
import PopularDishes from '../Components/menu/PopularDishes';
import PageBanner from '../Components/HomePage/PageBanner';
import SearchBar from '../Components/menu/SearchBar';




const Menu = ({onAddToCart}) => {
  return (
   <>
    <PageBanner
        title="Our menu"
        breadcrumb="Home / Menu"
        image="https://tse2.mm.bing.net/th/id/OIP.DIwQjvF25-U0j4pLnGGd4gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      

       <SearchBar />
      
      <PopularDishes onAddToCart={onAddToCart} />
      </>
  
  )
}

export default Menu