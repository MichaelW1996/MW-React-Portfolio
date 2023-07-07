import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="/">
              Home
            </a>

            <a href="/cv">CV</a>

            <a href="/projects">Projects</a>

            <a href="/contact">Contact</a>
          </p>

          <p>Michael &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}
