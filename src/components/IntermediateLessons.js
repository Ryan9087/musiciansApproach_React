import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../shared/Navigation';
import Contact from './Contact';
import IntermediateLessons from './Intermediatelessons';

function Intermediatelessons() {
  return (
     <div>
       <h1>Intermediate Lessons</h1>
     </div>
  );
}

export default Intermediatelessons;