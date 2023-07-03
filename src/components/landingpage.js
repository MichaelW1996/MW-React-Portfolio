import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import avatar from "../assets/pic.jpg";

export default function Landing() {
  return (
    <div className="landing-grid">
      <Container fluid className="landing-grid">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          {/* <Col><img src={Profile pic} alt="picture of michael" className="avatar-img"/></Col> */}
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>

      <Container fluid className="landing-grid bottom-padding">
        <div className="banner-text">
          <h1> Full-Stack Web Developer </h1>
          <hr />
          <p>
            HTML/CSS | Javascript | Bootstrap | React.js | Express.js | Node.js
            | MongoDB | GraphQL | jQuery | MySQL | Git{" "}
          </p>

          <div className="social-links">
            <a href="https://github.com/MichaelW1996" target="_blank">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/michaeljohnwalters/"
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

//landing needs to be about me
//heck
