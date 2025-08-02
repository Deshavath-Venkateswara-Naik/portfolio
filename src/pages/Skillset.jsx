import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle';
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Technical Skills */}
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset</strong>
        </h1>
        <Techstack />

        {/* Tools */}
        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I Use
        </h1>
        <Toolstack />

        {/* Leetcode */}
        <h1 className="project-heading">
          Problem Solving on <strong className="yellow">LeetCode</strong>
        </h1>
        <Leetcode />

        {/* GitHub */}
        <h1 className="project-heading">
          My <strong className="yellow">GitHub</strong> Activity
        </h1>
        <Github />
      </Container>
    </Container>
  );
};

export default Skillset;
