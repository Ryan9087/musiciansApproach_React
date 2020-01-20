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
          <CardText>In the beginning it is important to gain confidence. Get started quickly with the simple yet satisfying
                lessons.</CardText>
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
          <CardText>Take what you learned in our beginner lessons and began to build the skills you need to advance.</CardText>
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
          <CardText>Really start to put it all together with our advanced lessons, now you can start to create your own sound.</CardText>
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

