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
        <img src="\public\images\wonderland.png" alt="Wonderland Logo" height={100} />
        
      
        
        <h5>Delicious meals, freshly prepared with love. Enjoy your favourite dishes and get them delivered straight to your doorstep.
        
        
        
        <p><IoLocationSharp /> Lagos, Nigeria</p></h5>
        </Col>
      
        
        <Col>
            <h4>Quick Links</h4>
            <a href="/Home"><li>Home</li></a>
            <a href="/Menu"><li>Our Menu</li></a>
            <a href="/About"><li>About Us</li></a>
            <a href="/Contact"><li>Contact Us</li></a>
          </Col>
        <Col><h3>Contact Us <FaPhone /></h3>
            <h5>+234 800 000 0000</h5>
            <h5><MdEmail />hello@wonderland.com</h5>
            <h5><RiTimeLine />9 AM – 10 PM</h5>
            <h5>© 2026 Wonderland. All rights reserved.</h5>
      </Col>
      </Row>
      
    </Container>
  );
}

export default Footer;


<div class="Container">
  <div className="row">
    <div className="col"></div>
    <div className="col"></div>
    <div className="col"></div>
  </div>
</div>
