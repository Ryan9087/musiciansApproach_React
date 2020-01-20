import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Navigation from './shared/Navigation';
import Frontpagecard from './components/Frontpagecard';
import Advancedlessons from './components/Advancedlessons';
import Beginnerlessons from './components/Beginnerlessons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intermediatelessons from './components/Intermediatelessons';
import Carouselslider from './components/Carouselslider';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Loginmodal from './components/Loginmodal';


function App() {
  return (
    <Router>
     <div className="App">
       <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/beginnerlessons" component={Beginnerlessons} />
       <Route path="/intermediatelessons" component={Intermediatelessons} />
       <Route path="/advancedlessons" component={Advancedlessons} />
       <Route path="/contact" component={Contact} />
       </Switch>
     </div>
     </Router>
  );
}




const Home = () => (
  <div>
    <Container>
          <Row xs="1">
           <Col><Carouselslider /></Col> 
          </Row>
          
          <Row xs="1">
            <Col><img className="homeImage" src='/assets/images/barStar.png'></img></Col>
          </Row>
          <Navigation /> 
          <Jumbotron fluid>
                          <div className="container">
                              <div className="row">
                                  <div className="col">
                                  <h1 className="display-5 scriptMaster">Musician's Approach</h1>
            <p className="lead">As a guitarist, your approach is everything!</p>
            <p className="openingText">Interested in learning to play guitar? If you’re reading this, you’ve already taken the primary step in starting your musical journey. Learning guitar can be intimidating and it’s normal as a beginner to have many questions and concerns, but we’re here to help you get started off on the right foot.</p>
                                  </div>
                              </div>
                          </div>
          </Jumbotron>    
          <Frontpagecard />      
    </Container>              
    <Footer />
  </div>
)

export default App;
