import React from 'react';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container fluid className="contact-section" style={{ paddingTop: '60px', position: 'relative' }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
          Let's <strong className="yellow">Connect</strong>
        </h1>
        <ContactForm />
        <Social />
      </Container>
    </Container>
  );
};

export default Contact;
