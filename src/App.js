import React from 'react';
import "./App.css";
import Nav from './shared/Navigation';
import Home from './components/Home';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Advancedlessons from './components/AdvancedLessons';
import Beginnerlessons from './components/BeginnerLessons';
import BeginnerClassicallessons from './components/ClassicalLessons';
import Contact from './components/Contact';
import IntermediateLessons from './components/IntermediateLessons';
import Jazzlessons from './components/JazzLessons';
import Login from './components/Login';
import MusicTheoryLessons from './components/MusicTheoryLessons';
import RockLessons from './components/RockLessons';



const App = (props) => {
  return (
     <div className="App">
       <Header />
       <Nav />
       <Home />
       <Footer />
     </div>
  );
}

export default App;
