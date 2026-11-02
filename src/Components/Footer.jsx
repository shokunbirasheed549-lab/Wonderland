import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";




function Footer() {
  return (
    <Container fluid className='bg-black text-white p-5 footer' >
      <Row className='p-5'>
        <Col>
        <img src="\public\images\wonderland.png" alt="Wonderland Logo" width={100} />
        <p>Delicious meals, freshly prepared with love. Enjoy your favourite dishes and get them delivered straight to your doorstep.
        <p className='mt-5'><IoLocationSharp /> Lagos, Nigeria</p></p></Col>
      
        
        <Col>
            <h4>Quick Links</h4>
            <a href="/Home"><li>Home</li></a>
            <a href="/Menu"><li>Our Menu</li></a>
            <a href="/About"><li>About Us</li></a>
            <a href="/Contact"><li>Contact Us</li></a>
          </Col>
            <Col>
            <h4>Information</h4>
            <a href="/terms"><li>Terms And Condition</li></a>
            <a href="/privacy-policy"><li>Privacy Policy</li></a>
            <a href="/faqs"><li>Faqs</li></a>
            <a href="/refund"><li>Refund And Cancellation policy</li></a>
            <a href="/delivery"><li>Delivery policy</li></a>
            <a href="/offer"><li>offers and promotion</li></a>
          </Col>
        <Col><h3>Contact Us <FaPhone /></h3>
            <h5>+234 800 000 0000</h5>
            <h5><MdEmail />hello@wonderland.com</h5>
            <h5><RiTimeLine />9 AM – 10 PM</h5>
      </Col>
      </Row>
      <hr />

      <Row>
        <Col className='text-center'>
        <h6>© 2026 Wonderland. All rights reserved.</h6>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;


