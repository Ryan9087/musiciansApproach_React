import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, CardFooter
} from 'reactstrap';
import { Link } from "react-router-dom";

const Frontpagecard = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src='/assets/images/Beginner.jpg' alt="Card image cap" />
        <CardBody className="d-flex flex-column">
          <CardTitle>Beginner Lessons</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <div className="homeCardButton">
            <Link to='/beginnerlessons' className="btn btn-primary">
              <img className="cardImage mb-2" src='/assets/images/beginnerBadge.png' />Beginner Lessons
            </Link>
         </div>    
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src='/assets/images/Intermediate.jpg' alt="Card image cap" />
        <CardBody className="d-flex flex-column">
          <CardTitle>Intermediate Lessons</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <div className="homeCardButton">
            <Link to='/intermediatelessons' className="btn btn-primary">
              <img className="cardImage mb-2" src='/assets/images/intermediateBadge.png' />Intermediate Lessons
            </Link>
         </div>  
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/images/Advanced.jpg" alt="Card image cap" />
        <CardBody className="d-flex flex-column">
          <CardTitle>Advanced Lessons</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <div className="homeCardButton">
                    <Link to='/advancedlessons' className="btn btn-primary">
                    <img className="cardImage mb-2" src='/assets/images/advancedBadge.png' />Advanced Lessons
                    </Link>
                </div>  
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Frontpagecard;

