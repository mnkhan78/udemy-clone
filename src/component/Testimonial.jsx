import React from "react";
import Card from "react-bootstrap/Card";

const Testimonial = () => {
  return (
    <div className="testimonial-header">
      <h3>How learners like you are achieving their goals</h3>
      <div className="course-row">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Subtitle className="mb-2 text-muted">
                Mohammed Naseem
              </Card.Subtitle>
              <Card.Text>
                I am proud to say that after a few months of taking this
                course...I passed my exam and am now an AWS Certified Cloud
                Practitioner! This content was exactly what the CCP exam
                covered.
              </Card.Text>
              <hr />
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Subtitle className="mb-2 text-muted">MN Khan</Card.Subtitle>
              <Card.Text>
                One of the best courses on management and leadership I have come
                across so far. The advice is practical, and examples highly
                relatable. Would help anyone become a better manager.
              </Card.Text>
              <hr />
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Subtitle className="mb-2 text-muted">John A.</Card.Subtitle>
              <Card.Text>
                This course helped me freshen up on my product manager skills
                and land a job at Facebook! Thanks guys.
              </Card.Text>
              <hr />
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Subtitle className="mb-2 text-muted">
                Aryaman J.
              </Card.Subtitle>
              <Card.Text>
                I highly recommend this course for all budding data scientists.
                Even people with no prior knowledge of any visualization tools
                can become a master after completing this course.
              </Card.Text>
              <hr />
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
