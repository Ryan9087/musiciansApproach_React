import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Intermediatelessons from './Intermediatelessons';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Breadcrumb, BreadcrumbItem, Label, Container, Row, Col } from 'reactstrap';
import Frontpagecard from './Frontpagecard';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: '',
      agree: false,
      contactType: 'By Phone',
      feedback: '',
      touched: {
          firstName: false,
          lastName: false,
          phoneNum: false,
          email: false
      }
  };


  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(values) {
  console.log('Current state is: ' + JSON.stringify(values));
  alert('Current state is: ' + JSON.stringify(values));
}


  
  componentDidMount () {
    addResponseMessage("Welcome to advanced class!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    const conversations = [
        {
            que: 'How much to join this site?',
            res: '$20 a month'
        },
        {
            que: 'What is your name?',
            res: "Chat Master for Musician's Approach"
        },
    ]
    conversations.find((con) => {
        if (newMessage.toLowerCase() === con.que.toLowerCase()) {
            addResponseMessage(con.res)
        }
    })
  }

  render () {
    return (
        <div>
        <Container>
        <div>  
         <p className="scriptMasterSub">Musician's Approach</p> 
         </div>  
              <Row xs="1">
                <Col><img className="homeImage" src='/assets/images/barStar.png'></img></Col>
              </Row>
          <Navigation /> 
              <Jumbotron fluid>
               <div className="row">
                <div className="col pt-5">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        455 Bluefinch Dr<br />
                        Little Elm, TX<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link mb-3" href="tel:+12145551234"><i className="fa fa-phone"></i><span className="pl-2 text-white">1-214-555-1234</span></a><br />
                    <a role="button" className="btn btn-link" href="mailto:info@musiciansapproach.com"><i className="fa fa-envelope-o"></i><span className="pl-2 text-white">info@musiciansapproach.com</span></a>
                </div>
            </div>

            <div className="row row-content">
                   <div className="col-12">
                      <hr />
                   </div>
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>

                           <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control" 
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control" 
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select 
                                            model=".contactType"
                                            name="contactType"
                                            className="form-control">
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
              
              </Jumbotron>    
           
        </Container>       
        <Widget handleNewUserMessage={this.handleNewUserMessage}/>
        <Footer />
      </div>
      );
  };
  
}

export default Contact;

