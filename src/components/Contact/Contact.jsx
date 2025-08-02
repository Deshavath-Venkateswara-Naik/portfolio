import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_niilndo", // your emailJS service ID
          "template_6z5idye", // your template ID
          form.current,
          "VOBt6Akm1LhI5CZG-" // your user/public key
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact Me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Your Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Your Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please fill in all the fields before submitting."}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done && (
                <>
                  Thank you for reaching out! I’ve received your message and will get back to you as soon as possible.
                  <br />
                  Meanwhile, feel free to connect with me via{" "}
                  <a
                    href="https://www.linkedin.com/in/deshavath-venkateswara-naik-060548289"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0a66c2", fontWeight: "bold" }}
                  >
                    LinkedIn
                  </a>{" "}
                  or email me directly at{" "}
                  <a
                    href="mailto:deshavathvenkateswaranaik0193@gmail.com"
                    style={{ color: "#0a66c2", fontWeight: "bold" }}
                  >
                    deshavathvenkateswaranaik0193@gmail.com
                  </a>.
                </>
              )}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
