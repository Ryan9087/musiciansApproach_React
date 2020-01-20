import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Contact from './Contact';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';
import Frontpagecard from './Frontpagecard';
import Footer from './Footer';
import { Progress } from 'reactstrap';
import { Widget, addResponseMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import { Component } from 'react';

class Intermediatelessons extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () {
    addResponseMessage("Welcome to intermediate class!");
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
                        <img className="img-left pl-5 pt-5" src="assets/images/intermediateBadge.png" />
                        <div className="content-heading pl-3 pt-5">
                            <h2>Intermediate Lessons</h2>
                            <p>It's very hard to motivate yourself and others with only one goal, that's why intermediate
                            goals are so important.</p>
                        </div>
                    </div>
                    <div className="row my-4 justify-content-md-center">
                        <div className="col-11">
                            <div className="text-left mb-2">Progress</div>
                            <Progress value="2" max="20" />
                        </div>
                        <div className="row d-flex justify-content-around rowEtras">
                    <div className="col">
                        <div className="card p-4 border-0">
                            <h4 className="card-title pb-1">The E minor scale (Aolian)</h4>
                            <img src="assets/images/scalesAeolian.jpg" className="card-img-top img-fluid mb-3" alt="..." />
    
                            <div className="card-body">
                                <p className="card-text">
                                The minor scale (or Aolian scale) in the key of G is E minor (E Aolian). This scale has
                                the same notes as the G major scale but starts on the E note.
                                </p>
                                <p>The E minor scale would be written as E F# G A B C D E.</p>
                                <p>
                                Practic listening to the same backing track below from the beginnner lesson and now when
                                the track comes to the the third minor chord (E minor), try using the E minor scale
                                pattern. You can also use this scale over the rest of the song (you are still playing
                                the same notes from G), but listen to the difference when you are playing over the first
                                two chords versus the third minor chord.
                                </p>
                               
                                <div>
                                    <audio controls="controls" id="audioPlayer">
                                        <source src="music/acousticGuitar.mp3" type="audio/mpeg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                                <p className="mt-5">
                                        Now that you have taken our advanced lessons, move on to our advanced lessons to learn more.
                                    </p>
                                <Col >    
                                <a href="/advancedlessons" className="btn btn-primary my-3">Advanced Lessons</a>
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

export default Intermediatelessons;
