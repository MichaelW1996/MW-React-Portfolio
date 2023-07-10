import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faStackExchange,
} from "@fortawesome/free-brands-svg-icons";
// import "../Footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="https://github.com/MichaelW1996" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/michaeljohnwalters/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://stackoverflow.com/users/22200177/michael-walters"
            target="_blank"
          >
            <FontAwesomeIcon icon={faStackExchange} />
          </a>

          <FontAwesomeIcon icon="fab fa-stack-overflow" />
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <Link to="/cv" className="nav-padding">
              CV/Resume
            </Link>
            <Link to="/" className="nav-padding">
              About Me
            </Link>
            <Link to="/projects" className="nav-padding">
              Projects
            </Link>
            <Link to="/contact" className="nav-padding">
              Contact
            </Link>
          </p>
          <p>Michael &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}
