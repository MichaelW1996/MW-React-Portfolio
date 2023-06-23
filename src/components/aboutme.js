import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import //image from "../assets/image.jpg";

export default function AboutMe() {
  return (
    <div className="landing-grid">
      <Container className="contact-grid bottom-padding">
        <Row>
          <Col>
            <h2>Michael Waltes</h2>
            {/* <img src={image} alt="Image of Michael's face" className="hor-img" /> */}
          </Col>
          <Col className="">
            <p style={{ width: "75%", margin: "auto" }}>
              A Driven and Dedicated Web Developer, with a solid understanding
              of front and back-end development with a strong work ethic and
              drive to contribute to a team. Seeking an opportunity to develop,
              maintain and problem-solve complex code in an environment where my
              skills can proliferate. I've always had an intrest in the
              technical and figuring out how things operate, this manifested as
              nerdy interests such as Computor building & robotics as well as a
              thirst for knowledge and new skills.
              <ul></ul>
              After completing college, I decided to seek employment in a new
              feild. I swiftly found myself working in the worlds of geophysics
              and geomatics, overtime i found i was enjoying data manipulation
              and transformation to a greater and greater degree, working with
              datasets with thousands to millions of entries, my interest
              shifted from the content of the data to the ways i could optimise
              the process of conversion & additional information i could extract
              from the same dataset. Later in my Carrer I was introduced to
              industry specific tools written in MATLAB and Python. I found it
              fascinating to see lines of text execute tasks i had spent hours
              performing, pretty soon i was in love with programming.
              <ul></ul>
              In 2023 i found myself more and more drawn to a new career, my
              studies individually had been rewarding and enjoyable, but i knew
              the dream would only be achievable if i could commit more time to
              programming. So I attended a Full-Stack Web Development bootcamp
              by the University of birmingham. It's been the most interesting,
              informative & insightful time of my life. The bootcamp has pushed
              me & taught me new skills to make my projects come to life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
