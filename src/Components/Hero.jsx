import React from 'react'
import latin from '../assets/latin.webp'

import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img src="/slider/slide-001.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/slider\slide-002.jpeg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/slider\slide-003.jpeg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
