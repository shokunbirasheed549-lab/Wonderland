import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FIX 1: Point to the correct folder location for FoodCard
import FoodCard from "../FoodCard"; 

import { FaRegStar } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiChickenOven, GiFrenchFries } from "react-icons/gi";


// FIX 2: Note the uppercase 'F' in Food to match your Food.js data file
import foods from "../../data/Food"; 

const PopularDishes = ({ onAddToCart }) => {
  const popularFood = foods.slice(0, 6);
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col lg={3} md={4}>
          <img src="/images/homebanner (1).png" alt="" width={"100%"}/>
        </Col>
        <Col lg={9} md={8}>
          <div className="row g-4">
            {popularFood.map((food) => (
              <Col lg={4} sm={6} key={food.id}>
                <FoodCard food={food} onAddToCart={onAddToCart} />
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularDishes;
