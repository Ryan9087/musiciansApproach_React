import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import Loginmodal from '../components/Loginmodal';
import Yourapproach_dd from '../components/Yourapproach_dd';
import { render } from '@testing-library/react';
import { Component } from 'react'; 
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      user: {} 
    };
  }

  login(user) {
    console.log(user);
    this.setState((state, props) => {
      return { 
        user
      };
    });
  }

  render() {
    const navStyle = {
      color: 'white'
    };
  
    return (
      <div>
        <Container>
        <Row className="flexBasisOver">
             <Col sm='12' md='6' className='navContainer'>
              <Link style={navStyle} to='/'>
                <Button>Home</Button>d
              </Link>
              <Link style={navStyle} to='/contact'>
                <Button>Contact</Button>
              </Link>  
              <Yourapproach_dd />
             </Col>
  
             <Col sm='12' md='3'></Col>
             <Col sm='12' md='3'>
             <div className="loginButton">
             { this.state.user.username }
             <Loginmodal loginFunc={this.login}/>
             </div></Col>
        </Row>
                </Container>
      </div>
    );
  };
}

export default Navigation;