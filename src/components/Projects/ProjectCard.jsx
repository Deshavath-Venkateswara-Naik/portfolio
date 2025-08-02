import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="project-img" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <div className="d-flex justify-content-start gap-2">
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank">
              <AiFillGithub className="me-1" /> GitHub
            </Button>
          )}
          {demoLink && (
            <Button variant="success" href={demoLink} target="_blank">
              <BsBoxArrowUpRight className="me-1" /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
