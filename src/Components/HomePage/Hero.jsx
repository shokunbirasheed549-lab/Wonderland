import React from 'react'


import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img src="\public\slider\slide-1.jpeg" alt="" />
        <Carousel.Caption>
          <h3>JUICY GRILLED CHICKEN</h3>
          <p>     Juicy Grilled Chicken, Always a Good Idea Tender, well-seasoned and
            grilled to perfection. Simple, delicious, satisfying.</p>
             <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="\public\slider\slide-2.jpeg" alt="" />
        <Carousel.Caption>
          <h3>AUTHENTIC JOLLOF RICE</h3>
          <p>      Authentic Jollof Rice, Made with Love Rich flavour, fresh
            ingredients, and the perfect blend of spices — just the way you love
            it.</p>
             <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="\public\slider\slide-3.jpeg" alt="" />
        <Carousel.Caption>
          <h3> FAST FOOD DELIVERY</h3>
          <p>
                Great Food, Fast Delivery Your favourite meals, at your convenience.
            Fresh, hot and right on time.
          </p>
           <button>Order Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
