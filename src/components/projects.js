//dynamically create these, DRY principles
//maybe have a JSON of projects {"id":1, "project_name":"Attendme", "repo_name": "attend_me_proj2","tagline":"Full Stack app that makes event planning easy"}
//images registered with project_name.jpg value??
//generated links
import React from "react";
import { Card } from "react-bootstrap";

const githubUser = "https://github.com/MichaelW1996/";
const projects = [
  {
    id: 1,
    name: "Ludicrous Display",
    repo: "projectLudicrousDisplay",
    desc: "Football scores and trivia to look knowledgeable to strangers",
    url: "https://philiptart.github.io/projectLudicrousDisplay",
  },
  {
    id: 2,
    name: "Attendme",
    repo: "AttendMe",
    desc: "Simple event planner with Homemade REST API for guestlist management",
    url: "https://attend-me-proj2.herokuapp.com/",
  },
  {
    id: 3,
    name: "EnigmaGram",
    repo: "EnigmaGram",
    desc: "Coming soon - A messaging app where you do the encryption yourself",
    url: "https://www.tnmoc.org/bh-2-the-enigma-machine",
  },
];

export default function Projects() {
  return (
    <div>
      {projects.map((project) => {
        const imagePath =
          process.env.PUBLIC_URL + `/assets/${project.repo}.jpg`;
        return (
          <Card key={project.id}>
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.desc}</Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={imagePath} />
            <Card.Footer>
              <Card.Link href={githubUser + project.repo}>GitHub</Card.Link>
              <Card.Link href={project.url}>Live Demo</Card.Link>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}
