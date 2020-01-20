import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Intermediatelessons from './Intermediatelessons';
import MusicTheoryLessons from './MusicTheoryLessons';
import LoginService from '../Services/Login';

class Loginmodal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    console.log(this.props);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    let user = LoginService.login(this.username.value, this.password.value);
    if (user) {
      // alert(`Username: ${user.username} Password: ${user.password} Remember: ${this.remember.checked}`);
      console.log(this.props)
      this.props.loginFunc(user);

    } else {
      alert('Invalid Credential');
    }
    this.toggleModal();
    event.preventDefault();
  }

  logIn(username, password) {
    let user = LoginService.login('Ryan', '1234');
    console.log(user);
  }

  render() {
    return (
      <React.Fragment>
        <Button className="loginMaster" outline onClick={this.toggleModal}>
          <i className="fa fa-sign-in fa-lg" /> Login
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={input => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={input => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={input => this.remember = input} />
                  Remember me
                                </Label>
              </FormGroup>
              <Button className="mt-2" type="submit" value="submit" color="primary" >Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Loginmodal;

