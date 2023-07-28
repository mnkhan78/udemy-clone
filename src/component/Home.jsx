import React from "react";
import Container from "react-bootstrap/Container";
import cisco from "../img/cisco.svg";
import samsung from "../img/samsung.svg";
import volkswagen from "../img/volkswagen.svg";
import pg from "../img/pg.svg";
import hlp from "../img/hlp.svg";
import citi from "../img/citi.svg";
import ericsson from "../img/ericsson.svg";
import "../App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import reactimg from "../img/react-course.png";
import reactimg2 from "../img/react-course2.png";
import reactimg3 from "../img/react-course3.jpg";
import reactimg4 from "../img/react-course4.jpg";
import pyimg from "../img/python-course.jpg";
import pyimg2 from "../img/python-course2.jpg";
import pyimg3 from "../img/python-course3.jpg";
import pyimg4 from "../img/python-course4.jpg";
import webdev from "../img/webdev1.jpg";
import webdev2 from "../img/webdev2.jpg";
import webdev3 from "../img/webdev3.jpg";
import webdev4 from "../img/webdev4.jpg";
import datasci from "../img/data-science.jpg";
import datasci2 from "../img/data-science2.jpg";
import datasci3 from "../img/data-science3.jpg";
import datasci4 from "../img/data-science4.jpg";
import instructor from "../img/instructor.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Slider from "./Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <div className="home-first-box">
        <h4>
          Trusted by over 14,400 companies and millions of learners around the
          world
        </h4>
        <br />
        <br />
        <Container>
          <div className="course-row">
            <div>
              <img src={cisco} alt="img" />
            </div>
            <div>
              <img src={samsung} alt="img" />
            </div>
            <div>
              <img src={volkswagen} alt="img" />
            </div>
            <div>
              <img src={pg} alt="img" />
            </div>
            <div>
              <img src={citi} alt="img" />
            </div>
            <div>
              <img src={ericsson} alt="img" />
            </div>
            <div>
              <img src={hlp} alt="img" />
            </div>
          </div>
        </Container>
      </div>
      <div>
        <h2>A broad selection of courses</h2>
        <p>
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
      </div>
      <div>
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="React JS">
            <div className="home-course-container">
              <h3>Grow your software development skills with JavaScript</h3>
              <p>
                Take one of Udemy's range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You'll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to...
              </p>
              <div className="course-row">
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={reactimg} />
                    <Card.Body>
                      <Card.Title>The Complete React Course: 2023</Card.Title>
                      <Card.Text>Mishal Gupta</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={reactimg2} />
                    <Card.Body>
                      <Card.Title>Complete React For Beginner</Card.Title>
                      <Card.Text>Code Camp</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={reactimg3} />
                    <Card.Body>
                      <Card.Title>The Complete React Course: 2023</Card.Title>
                      <Card.Text>Simpli Learn</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={reactimg4} />
                    <Card.Body>
                      <Card.Title>
                        React with Real Life Based Project
                      </Card.Title>
                      <Card.Text>Code Step by Step</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="profile" title="Python">
            <div className="home-course-container">
              <h3>Expand your career opportunities with Python</h3>
              <p>
                Take one of Udemy's range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You'll learn how to build
                everything from games to sites to apps.
              </p>
              <div className="course-row">
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pyimg} />
                    <Card.Body>
                      <Card.Title>The Complete Python Bootcamp 2023</Card.Title>
                      <Card.Text>Raj Shekhar</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pyimg2} />
                    <Card.Body>
                      <Card.Title>
                        Python: Master Programming and.....
                      </Card.Title>
                      <Card.Text>Haris Ali Khan</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pyimg3} />
                    <Card.Body>
                      <Card.Title>
                        Python for Data Science and Machine Learning
                      </Card.Title>
                      <Card.Text>Jose Portilla</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pyimg4} />
                    <Card.Body>
                      <Card.Title>
                        Python Networking Programming for....
                      </Card.Title>
                      <Card.Text>Dev Nirwal</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="longer-tab" title="Web Development">
            <div className="home-course-container">
              <h3>Build websites and applications with Web Development</h3>
              <p>
                The world of web development is as wide as the internet itself.
                Much of our social and vocational lives play out on the
                internet, which prompts new industries aimed at creating,
                managing, and debugging the websites and applications that we
                increasingly rely on.
              </p>
              <div className="course-row">
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={webdev} />
                    <Card.Body>
                      <Card.Title>The Web Developer Bootcamp: 2023</Card.Title>
                      <Card.Text>Celebal Technologies</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={webdev2} />
                    <Card.Body>
                      <Card.Title>Web Development Masterclass</Card.Title>
                      <Card.Text>Apna College</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={webdev3} />
                    <Card.Body>
                      <Card.Title>
                        Practical Web Development: 22 projects
                      </Card.Title>
                      <Card.Text>Harry Bhai</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={webdev4} />
                    <Card.Body>
                      <Card.Title>Internet and Web Development</Card.Title>
                      <Card.Text>Code Step by Step</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="contact" title="Data Science">
            <div className="home-course-container">
              <h3>Lead data-driven decisions with Data Science</h3>
              <p>
                Data science application is an in-demand skill in many
                industries worldwide — including finance, transportation,
                education, manufacturing, human resources, and banking. Explore
                data science courses with Python, statistics, machine learning,
                and more to grow your knowledge.
              </p>
              <div className="course-row">
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={datasci} />
                    <Card.Body>
                      <Card.Title>The Data Science Course</Card.Title>
                      <Card.Text>365 Career Team</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={datasci2} />
                    <Card.Body>
                      <Card.Title>Machine Learning A-Z</Card.Title>
                      <Card.Text>Super Data Science Team</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={datasci3} />
                    <Card.Body>
                      <Card.Title>Data Science Real World Project</Card.Title>
                      <Card.Text>Dhaval Patel</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={datasci4} />
                    <Card.Body>
                      <Card.Title>Statistics for Data Science</Card.Title>
                      <Card.Text>Celebal Technologies Team</Card.Text>
                      <span>4.8star</span>
                      <p>299$</p>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>

      <Testimonial />
      <div className="course-row">
        <div>
          <img src={instructor} alt="img" />
        </div>
        <div>
          <h3>Become an Instructor</h3>
          <p>
            Instructors from around the world teach <br /> millions of students
            on Udemy. We provide the <br /> tools and skills to teach what you
            love
          </p>
          <Link to="/teaching">
            <Button>Start Teaching Today</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
