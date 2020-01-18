import React from 'react';
import "../App.css";
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import Loginmodal from '../components/Loginmodal';
import Yourapproach_dd from '../components/Yourapproach_dd';

function Navigation() {
  const navStyle = {
    color: 'white'
  };

  return (
    <div>
      <Container>
      <Row className="flexBasisOver">
           <Col sm='12' md='6' className='navContainer'>
            <Link style={navStyle} to='/'>
              <Button>Home</Button>
            </Link>
            <Link style={navStyle} to='/contact'>
              <Button>Contact</Button>
            </Link>  
            <Yourapproach_dd />
           </Col>

           <Col sm='12' md='3'>Column</Col>
           <Col sm='12' md='3'><Loginmodal /></Col>
      </Row>
              {/* <Link style={navStyle} to='/beginnerlessons'>
                <li><Button>Beginner Lessons</Button></li>
              </Link> 
              <Link style={navStyle} to='/intermediatelessons'>
                <li><Button>Intermediate Lessons</Button></li>
              </Link> 
              <Link style={navStyle} to='/advancedlessons'>  
                <li><Button>Advanced Lessons</Button></li>
              </Link>  */}
              </Container>
    </div>
    
  );
}

export default Navigation;