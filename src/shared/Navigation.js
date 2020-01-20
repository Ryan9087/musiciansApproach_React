import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import Loginmodal from "../components/Loginmodal";
import Yourapproach_dd from "../components/Yourapproach_dd";
import { render } from "@testing-library/react";
import { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      user: {} 
    };
  }

  login(user) {
    console.log(user);
    this.setState((state, props) => {
      return {
        user
      };
    });
  }

  render() {
    const navStyle = {
      color: "white"
    };

    const loginImage = {
      width: "70px",
      height: "auto",
      float: "left"
    };
 
    return (
      <div>
        <Container>
          <Row className="flexBasisOver">
            <Col sm="12" md="6" className="navContainer">
              <Link style={navStyle} to="/">
                <Button>Home</Button>d
              </Link>
              <Link style={navStyle} to="/contact">
                <Button>Contact</Button>
              </Link>
              <Yourapproach_dd />
            </Col>

            <Col sm="12" md="2">
            <div className="loginCred">
                <div className="loggedInPerson pr-1">{this.state.user.username}</div>
                <div className="loggedInPerson">{this.state.user.message}</div>
                <div><img style={loginImage} src={this.state.user.badge}></img></div>
            </div>  
            </Col>
            <Col sm="12" md="4">
              <div className="loginButton">
              <Loginmodal loginFunc={this.login} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;
