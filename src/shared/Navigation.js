import React from 'react';
import "../App.css";


const Nav = (props) => {
  return (
    <nav>
        <h3>Navigation</h3>
          <ul className='nav-links'>
            <li>Home</li>
            <li>Contact</li>
            <li>Beginner Lessons</li>
            <li>Intermediate Lessons</li>
            <li>Advanced Lessons</li>
            <li>Music Theory Lessons</li>
            <li>Jazz Lessons</li>
            <li>Classical Lessons</li>
            <li>Rock Lessons</li>
          </ul>
    </nav>
  );
}

export default Nav;