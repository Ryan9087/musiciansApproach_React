import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Contact from './Contact';
import Intermediatelessons from './Intermediatelessons';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import Frontpagecard from './Frontpagecard';
import Footer from './Footer';
import { Progress } from 'reactstrap';
import { Widget, addResponseMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import { Component } from 'react';

class Advancedlessons extends Component {
  constructor(props) {
    super(props);

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
                              <div className="container">
                              </div>
                              <div className="row">
                        <img className="img-left pl-5 pt-5" src="assets/images/advancedBadge.png" />
                        <div className="content-heading pl-3 pt-5">
                            <h2>Advanced Lessons</h2>
                            <p>There is always the potential to advance and evolve.</p>
                        </div>
                    </div>
                    <div className="row my-4 justify-content-md-center">
                        <div className="col-11">
                            <div className="text-left mb-2">Progress</div>
                            <Progress value="3" max="20" />
                        </div>
                        <div className="row d-flex justify-content-around rowEtras">
                    <div className="col">
                        <div className="card p-4 border-0">
                            <h4 className="card-title pb-1">The E Minor Harmonic Scale</h4>
                            <img src="assets/images/eHarmonicMinorScale.jpg" className="card-img-top img-fluid mb-3" alt="..." />
    
                            <div className="card-body">
                                <p className="card-text">
                                This harmonic minor scale is based on the natural minor scale with the same key / tonic
                                note - E natural minor scale.
                                </p>
                                <p>The E minor scale would be written as E F# G A B C D# E.</p>
                                <p>
                                You will notice the only difference between the E Minor Scale and E Harmonic Minor Scale
                                is the D is sharp in Harmonic Minor.
                                </p>
                                <p>
                                Practic listening to the same backing track below from the beginnner lesson and now when
                                the track comes to the the third minor chord (E Minor), try using the E Harmonic Minor
                                scale pattern over this chord. You can also use this scale over the first chord G Major
                                (you are still playing the same notes from G, except the D has been replaced with a D#).
                                When the backing track is playing the second chord D Major, use either the G Major Chord
                                or E Minor from the previous two lessons.
                            </p>
                                <div>
                                    <audio controls="controls" id="audioPlayer">
                                        <source src="music/acousticGuitar.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                                <p className="mt-5">
                                        Now that you have taken our advanced lessons, move on to our music theory lessons to learn more.
                                    </p>
                                <Col >    
                                <a href="/" className="btn btn-primary my-3">Music Theory Lessons</a>
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

export default Advancedlessons;
