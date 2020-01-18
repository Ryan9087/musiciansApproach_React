import React from 'react';
import "../App.css";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
     <div>
       <footer class="site-footer">
        <Container>
          <Row xs="3">
            <Col className="footerCols">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="index.html">Home</a></li>
                <li><a href="#" data-toggle="modal" data-target="#loginModal">Login</a></li>
                <li><a href="#" data-toggle="modal" data-target="#contactModal">Contact</a></li>
              </ul>
            </Col>
            <Col className="footerCols">
              <h5>Social</h5>
              <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                <i class="fa fa-instagram"></i>
              </a>
              <a classNames="btn btn-social-icon btn-instagram" href="http://facebook.com/">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="btn btn-social-icon btn-instagram" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-instagram" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
            </Col>
            <Col className="footerCols">
              <div className="footerContact">
                <a href="tel:+12065551234">
                  <i className="fa fa-phone"></i>
                  <span className="footerContactInfo">1-214-555-1234</span>
                </a>
                <br />
                <a href="mailto:campsites@nucamp.co">
                  <i className="fa fa-envelope-o"></i>
                  <span className="footerContactInfo">info@musiciansapproach.com</span>
                </a>
              </div>
            </Col>
        </Row>
        </Container>
      </footer>
     </div>
  );
}

export default Footer;