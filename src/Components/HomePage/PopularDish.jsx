import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import foods from "../../data/Food"
import FoodCart from "../FoodCard"


function PorpularDish() {
  const popularDish =foods.slice(0, 6) 
  return (
    <div>
    <Container>
      
      <Row>
        <Col md={3}>Banner</Col>
        <Col md={9}>
        <div className="popular-dish">
          <section className='title'>
        <h6>OUR SPECIAL</h6>
        <h2>Popular Dishies</h2>
        <p>Fresh ingredients, Delicious Taste, Always</p>
        </section>
        
        <div className="food-container">
          {popularDish.map((food) => (
            <FoodCart food={food} key={food.id} />
          ))}
        </div>  
        </div>
        
        </Col>
      
      </Row>
    </Container>
    </div>
  );
}


export default PorpularDish
