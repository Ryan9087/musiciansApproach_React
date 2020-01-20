import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Contact from './Contact';
import Intermediatelessons from './Intermediatelessons';
import Advancedlessons from './Beginnerlessons';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import Frontpagecard from './Frontpagecard';
import Footer from './Footer';
import { Progress } from 'reactstrap';
import { Widget, addResponseMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import { Component } from 'react';

class Beginnerlessons extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () {
    addResponseMessage("Welcome to beginner class!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    const conversations = [
        {
            que: 'How much?',
            res: '100$/hour'
        },
        {
            que: 'What is your name?',
            res: 'Javis'
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
              <Row xs="1">
                <Col><img className="homeImage" src='/assets/images/barStar.png'></img></Col>
              </Row>
              <Navigation /> 
              <Jumbotron fluid>
                              <div className="container">
                              </div>
                              <div className="row">
                        <img className="img-left pl-5" src="assets/images/beginnerBadge.png" />
                        <div className="content-heading pl-3 pt-5">
                            <h2>Beginner Lessons</h2>
                            <p>The master has failed more times than the beginner has even tried.</p>
                        </div>
                    </div>
                    <div className="row my-4 justify-content-md-center">
                        <div className="col-11">
                            <div className="text-left mb-2">Progress</div>
                            <Progress value="1" max="20" />
                        </div>
                        <div className="row d-flex justify-content-around rowEtras">
                    <div class="col">
                        <div className="card p-4 border-0">
                            <h4 className="card-title pb-1">The major scale (Ionian)</h4>
                            <img src="assets/images/scalesIonian.jpg" class="card-img-top img-fluid mb-3" alt="..." />
    
                            <div className="card-body">
                                <p className="card-text">
                                    The major scale (or Ionian scale) is one of the most commonly used musical scales,
                                    especially in Western music. It is one of the diatonic scales. Like many musical scales,
                                    it is made up of seven notes: the eighth duplicates the first at double its frequency so
                                    that it is called a higher octave of the same note (from Latin "octavus", the eighth).
                                </p>
                                <p>The G major scale would be written as G A B C D E F#.</p>
                                <p>
                                    Practic listening to the backing track below and get a feel of how this major scale
                                    sounds over the first two major chords (G and D) and the third minor chord (E minor).
                                </p>
    
                                <div>
                                    <audio controls="controls" id="audioPlayer">
                                        <source src="music/acousticGuitar.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                                <p className="mt-5">
                                        Now that you have taken our beginner lessons, move on to our intermediate lessons to learn more..
                                    </p>
                                <Col >    
                                <a href="intermediate.html" class="btn btn-primary my-3">Intermediate Lessons</a>
                                </Col>
                            </div>
                        </div>
                    </div>
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

export default Beginnerlessons;