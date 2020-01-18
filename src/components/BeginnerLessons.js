import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../shared/Navigation';
import Contact from './Contact';
import Intermediatelessons from './Intermediatelessons';
import MusicTheoryLessons from './MusicTheoryLessons';


function Beginnerlessons() {
  return (
     <div>
       <h1>Beginner Lessons</h1>
     </div>
  );
}

export default Beginnerlessons;