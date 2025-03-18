import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

let Navigation = () => {
  return (
    <div id="fornavigation">
      <Navbar fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand className="nav-brand" href="#home">
            <Nav.Link href="/home">
              <h1>Sathyan.</h1>
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="mx-auto justify-content-center">
            <Nav.Link href="/home" className="mx-5">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="mx-5">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="mx-5">
              Projects
            </Nav.Link>
          </Nav>
        </Container>
        {/* Social Media Icons */}
        <Nav className="ms-end">
          <Nav.Link
            href="https://github.com/sathyan-dev"
            target="_blank"
            className="text-dard mx-1"
          >
            <FaGithub size={30} />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/sathyan-shanmugam-472074338/"
            target="_blank"
            className="text-primary mx-1"
          >
            <FaLinkedin size={30} />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
