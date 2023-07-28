import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import teachimg4 from "../img/teaching-page4.jpg";
import teachimg5 from "../img/teaching-page5.jpg";
import teachimg6 from "../img/teaching-page6.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const Teach = () => {
  return (
    <div className="teach-main">
      <div className="teach-page-header">
        <h1>How To Begin</h1>
      </div>
      <div className="teach-container">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Plan Your Curriculum">
            <div className="course-row">
              <div>
                <Card border="light" style={{ width: "22rem" }}>
                  <Card.Body>
                    <Card.Text style={{ textAlign: "justify" }}>
                      You start with your passion and knowledge. Then choose a
                      promising topic with the help of our Marketplace Insights
                      tool.
                    </Card.Text>
                    <Card.Text style={{ textAlign: "justify" }}>
                      The way that you teach — what you bring to it — is up to
                      you.
                    </Card.Text>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ textAlign: "justify" }}
                    >
                      <b>How we help you-</b>
                    </Card.Subtitle>
                    <Card.Text style={{ textAlign: "justify" }}>
                      We offer plenty of resources on how to create your first
                      course. And, our instructor dashboard and curriculum pages
                      help keep you organized.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card border="light" style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={teachimg4} />
                </Card>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Record Your Video">
            <div className="course-row">
              <div>
                <Card border="light" style={{ width: "22rem" }}>
                  <Card.Body>
                    <Card.Text style={{ textAlign: "justify" }}>
                      Use basic tools like a smartphone or a DSLR camera. Add a
                      good microphone and you're ready to start.
                    </Card.Text>
                    <Card.Text style={{ textAlign: "justify" }}>
                      If you don't like being on camera, just capture your
                      screen. Either way, we recommend two hours or more of
                      video for a paid course.
                    </Card.Text>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ textAlign: "justify" }}
                    >
                      <b>How we help you-</b>
                    </Card.Subtitle>
                    <Card.Text style={{ textAlign: "justify" }}>
                      Our support team is available to help you throughout the
                      process and provide feedback on test videos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card border="light" style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={teachimg5} />
                </Card>
              </div>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Launch Your Video">
            <div className="course-row">
              <div>
                <Card border="light" style={{ width: "22rem" }}>
                  <Card.Body>
                    <Card.Text style={{ textAlign: "justify" }}>
                      Gather your first ratings and reviews by promoting your
                      course through social media and your professional
                      networks.
                    </Card.Text>
                    <Card.Text style={{ textAlign: "justify" }}>
                      Your course will be discoverable in our marketplace where
                      you earn revenue from each paid enrollment.
                    </Card.Text>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ textAlign: "justify" }}
                    >
                      <b>How we help you-</b>
                    </Card.Subtitle>
                    <Card.Text style={{ textAlign: "justify" }}>
                      Our custom coupon tool lets you offer enrollment
                      incentives while our global promotions drive traffic to
                      courses. There's even more opportunity for courses chosen
                      for Udemy Business.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card border="light" style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={teachimg6} />
                </Card>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className="teach-footer">
        <h1>Become an instructor today</h1>
        <p>Join one of the world's largest online learning marketplaces.</p>
        <Button>Get Started Today</Button>

      </div>
    </div>
  );
};

export default Teach;
