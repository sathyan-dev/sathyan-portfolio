import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiHibernate,
  SiMysql,
  SiReactbootstrap,
  SiSpringboot,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import Navigation from "./Navigation";

let About = () => {
  return (
    <div
      id="forabout"
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Navigation></Navigation>
      <Container>
        <Row className="text-center">
          <Col>
            <h1 style={{ color: "#a100ff" }}>About Me</h1>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <p style={{ fontSize: "20px" }}>
            I'm Sathyan, a passionate Java Full Stack Developer with a strong
            foundation <br /> in both frontend and backend development. I have
            experience in building micro-projects that <br /> enhance my skills
            in Java, Spring Boot, Hibernate, REST APIs, and modern frontend
            frameworks like React.
          </p>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <h2 style={{ color: "#a100ff" }}>My Skills</h2>
          </Col>
        </Row>
        <Container className="symbols">
          <Row className=" text-center mb-4 gap-1 mt-5">
            <Col>
              <FaHtml5 size={60} color="#E34F26" title="HTML5" />
              <p className="mt-2">HTML 5</p>
            </Col>
            <Col>
              <FaCss3Alt size={60} color="#1572B6" title="CSS3" />
              <p className="mt-2">CSS 3</p>
            </Col>
            <Col>
              <FaBootstrap size={60} color="#7952B3" title="Bootstrap" />
              <p className="mt-2">BOOTSTRAP</p>
            </Col>
            <Col>
              <FaJs size={60} color="#F7DF1E" title="JavaScript" />
              <p className="mt-2">JAVASCRIPT</p>
            </Col>
          </Row>
          <Row className=" text-center mb-4 gap-1 mt-5">
            <Col>
              <FaReact size={60} color="#61DAFB" title="ReactJS" />
              <p className="mt-2">REACT.JS</p>
            </Col>
            <Col>
              <SiReactbootstrap
                size={60}
                color="#7952B3"
                title="React Bootstrap"
              />
              <p className="mt-2">REACT-BOOTSTRAP</p>
            </Col>
            <Col>
              <DiJava size={60} color="#007396" title="Java" />
              <p className="mt-2">JAVA</p>
            </Col>
            <Col>
              <SiSpringboot size={60} color="#6DB33F" title="Spring Boot" />
              <p className="mt-2">SPRING BOOT</p>
            </Col>
          </Row>
          <Row className=" text-center mb-2 gap-1 mt-5">
            <Col>
              <SiHibernate size={60} color="#59666C" title="Hibernate" />
              <p className="mt-2">HIBERNATE</p>
            </Col>
            <Col>
              <SiMysql size={60} color="#4479A1" title="MySQL" />
              <p className="mt-2">MySQL</p>
            </Col>
            <Col>
              <FaGitAlt size={60} color="#F05032" title="Git" />
              <p className="mt-2">GIT</p>
            </Col>
            <Col>
              <FaGithub size={60} color="white" title="GitHub" />
              <p className="mt-2">GITHUB</p>
            </Col>
              
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
