import React from "react";
import Card from "react-bootstrap/Card";
import teachingimg from "../img/teaching.jpg";
import Button from "react-bootstrap/esm/Button";
import teachimg from "../img/teaching-page.jpg"
import teachimg2 from "../img/teaching-page2.jpg";
import teachimg3 from "../img/teaching-page3.jpg";
import Teach from "./Teach";

const Teaching = () => {
  return (
    <div>
      <Card className="bg-dark text-dark">
        <Card.Img src={teachingimg} alt="Card image" />
        <Card.ImgOverlay>
          <div>
            <Card.Title>
              <h2>
                Come Teach <br /> with us
              </h2>
            </Card.Title>
            <Card.Text>
              Become an instructor and change <br /> lives — including your own
            </Card.Text>
            <Button>Get Started</Button>
          </div>
        </Card.ImgOverlay>
      </Card>
      <div>
        <h1>So Many Reasons to Start</h1>
      </div>
      <div className="course-row">
        <div className="inner-flex-box">
          <img src={teachimg} alt="" />
          <h4>Teach Your Way</h4>
          <p>
            Publish the course you want, in the way you want, and always have
            control of your own content.
          </p>
        </div>
        <div className="inner-flex-box">
          <img src={teachimg2} alt="" />
          <h4>Inspire Learner</h4>
          <p>
            Teach what you know and help learners explore their interests, gain
            new skills, and advance their careers.
          </p>
        </div>
        <div className="inner-flex-box">
          <img src={teachimg3} alt="" />
          <h4>Get Rewarded</h4>
          <p>
            Expand your professional network, build your expertise, and earn
            money on each paid enrollment.
          </p>
        </div>
      </div>
      <div className="course-row teaching-page-banner" >
        <div>
          <h1>62M</h1>
          <p>students</p>
        </div>
        <div>
          <h1>75+</h1>
          <p>Languages</p>
        </div>
        <div>
          <h1>830M</h1>
          <p>Enrollments</p>
        </div>
        <div>
          <h1>180+</h1>
          <p>Countries</p>
        </div>
        <div>
          <h1>14,400+</h1>
          <p>Enterprise Customer</p>
        </div>
      </div>
      <Teach />
    </div>
  );
};

export default Teaching;
