import React, { useState } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';


const Yourapproach_dd = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Your Approach
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header > 
            <Link to='/beginnerlessons' className="dropdownLink">
                Beginner Lessons
            </Link> 
            <Link to='/Intermediatelessons' className="dropdownLink">
                Intermediate Lessons
            </Link> 
            <Link to='/Advancedlessons' className="dropdownLink">
                Advanced Lessons
            </Link> 
        </DropdownItem>
        
      </DropdownMenu>
    </Dropdown>  
  );
}

export default Yourapproach_dd;