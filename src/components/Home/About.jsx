import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Deshavath Venkateswara Naik</span>
              and I'm from <span className="yellow">Kurnool, Andhra Pradesh, India.</span>
              <br />
              <br />
              I'm currently pursuing my B.Tech in Computer Science at RGUKT RK Valley (2022–2026),
              with a CGPA of <b className="yellow">8.8</b>. I completed my Pre-University with a CGPA of <b className="yellow">9.5</b>, and scored a perfect <b className="yellow">10.0</b> in SSC.
              <br />
              <br />
              I am a passionate
              <b className="yellow"> Full-Stack Developer</b> who loves building efficient and user-friendly web applications.
              <br />
              <br />
              I am skilled in:
              <br />
              <b className="yellow">JavaScript, Java, C</b>, and frameworks like 
              <b className="yellow"> React.js, Node.js, Express.js</b>, with hands-on experience in 
              <b className="yellow"> MongoDB and MySQL</b>.
              <br />
              <br />
              I enjoy exploring modern web technologies, developing new products, and am also interested in areas like 
              <b className="yellow"> Artificial Intelligence</b> and 
              <b className="yellow"> Data Structures & Algorithms</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Deshavath-Venkateswara-Naik"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/NaikDeshav81721"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deshavath-venkateswara-naik-060548289"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/uR1MIpX7bA/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
