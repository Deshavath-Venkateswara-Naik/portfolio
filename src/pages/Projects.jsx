import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import faceRecogImg from "../assets/projects/face-recognition.png";
import devtinderImg from "../assets/projects/devtinder.png";
import leaderboardImg from "../assets/projects/leaderboard.png";
import reactAppImg from "../assets/projects/react-app.png";
import marketingImg from "../assets/projects/digital-marketing.png";
import employwiseImg from "../assets/projects/employwise.png";
import portfolioImg from "../assets/projects/portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecogImg}
              title="Face Recognition and Report"
              description="AI-powered visitor/student gate entry system using React, Python, Flask, MySQL, and OpenCV for real-time facial recognition."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik/Face-Recognition-and-Report-generation"
              demoLink="" // Add if deployed
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devtinderImg}
              title="DevTinder"
              description="Real-time matchmaking web app for developers using MERN stack, featuring chat, skill matching, Razorpay integration."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik/DevTinderr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaderboardImg}
              title="Leaderboard"
              description="3W internship task — a dynamic leaderboard system using React, Express, and MongoDB for user ranking and history."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik/leaderboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactAppImg}
              title="React App"
              description="Basic frontend practice project using React and HTML for UI structure and component rendering."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik/React-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketingImg}
              title="Digital Marketing Agency"
              description="Full-stack web app with services, blogs, and contact form. Built using MERN, Axios, and Bootstrap."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik/Digital-Marketing-Agency"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employwiseImg}
              title="EmployWise App"
              description="User management app using React and Reqres API. Supports login, user listing, pagination, edit/delete."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik/employwise-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              title="Portfolio Website"
              description="Personal portfolio website built using React, React Bootstrap, and animations. Showcases projects, contact, and resume."
              ghLink="https://github.com/Deshavath-Venkateswara-Naik"
              demoLink="https://your-portfolio-link.netlify.app" // Replace with actual
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
