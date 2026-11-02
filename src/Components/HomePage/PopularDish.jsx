import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodCard from "../FoodCard";
import { FaRegStar } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiChickenOven, GiFrenchFries } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import foods from "../../data/Food";

const PopularDishes = ({ onAddToCart }) => {

  const popularFood = foods.slice(0, 6); // Get the first 6 popular dishes
  return (
    <Container className="py-5">
      <Row className="g-4">
        {/* Sidebar / Categories Filter */}
        <Col lg={3} md={4}>
          <img src="\images\homebanner (1).png" alt="" width={"100%"}/>
        </Col>

        {/* Main Food Grid Content */}
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