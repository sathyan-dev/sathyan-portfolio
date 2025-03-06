import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import profile from "./assets/sathyan-profile.jpg";
import Navigation from "./Navigation";

let Home = () => {
  return (
    <div id="Homemain">
      <Navigation></Navigation>
      <Container className="ms-5">
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6}>
            <h1 className="typing-text">Hello, I'm Sathyan</h1>
            <h4 className="mt-3">I'm a Java Full Stack Developer</h4>
            <p className="mt-3" style={{ fontSize: "20px" }}>
              A Passionate JAVA Full Stack Developer, <br />
              dedicated to building user-friendly web applications.
            </p>
            {/* Contact Details */}
            <div className="mt-4">
              <p>
                <FaMapMarkerAlt size={23} style={{ color: "#a100ff" }} />{" "}
                Chennai
              </p>
              <p>
                <FaPhone size={23} style={{ color: "#a100ff" }} /> +91
                7708283591
              </p>
              <p>
                <FaEnvelope size={23} style={{ color: "#a100ff" }} />{" "}
                sathyanshanmugam01@gmail.com
              </p>
                   
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="d-flex justify-content-center">
            <Col xs={6} md={8} className="d-flex justity-content-center">
              <Image id="profileimg" src={profile} roundedCircle />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
