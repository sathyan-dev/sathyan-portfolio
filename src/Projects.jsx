import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
import Navigation from "./Navigation";

const Projects = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container
        fluid
        className="projects d-flex flex-column align-items-center justify-content-center text-center w-50"
      >
        <Row>
          <Col>
            <h1 style={{ color: "black" }} className="mb-4">
              Weather Application
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-3">
              A simple weather application that provides real-time weather
              details based on user-inputted locations. Built using JavaScript,
              it fetches data from a weather API. Displays temperature,
              conditions, and other weather metrics in a user-friendly
              interface.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <h5>
              Tools Used : <FaHtml5 size={30} color="#E34F26" title="HTML5" />
              {"  "}
              <FaCss3Alt size={30} color="#1572B6" title="CSS3" />
              {"  "}
              <FaJs size={30} color="#F7DF1E" title="JavaScript" />
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://weather-app-js-sathyan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="button mt-2">Live Demo</Button>
            </a>
          </Col>
        </Row>
      </Container>

      <Container
        id="project-1"
        fluid
        className="projects d-flex flex-column align-items-center justify-content-center text-center w-50 mt-5"
      >
        <Row>
          <Col>
            <h1 style={{ color: "black" }} className="mb-4">
              Styles Conference
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-3">
              Style Conference is a premier event bringing together designers,
              developers, and creative professionals to explore the latest
              trends in web design and UX.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <h5>
              Tools Used : <FaReact size={30} color="#61DAFB" title="ReactJS" />{" "}
              <SiReactbootstrap
                size={30}
                color="skyblue"
                title="React Bootstrap"
              />{" "}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://styled-conference-reactapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="button mt-2 mb-3">
                Live Demo
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Container
        id="project-1"
        fluid
        className="projects d-flex flex-column align-items-center justify-content-center text-center w-50 mt-5 mb-4"
      >
        <Row>
          <Col>
            <h1 style={{ color: "black" }} className="mb-4">
              to-do List App
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-3">
              A simple to-do list application which is used to track our daily
              tasks and feel the bliss of the completing of the task my marking
              it as completed.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <h5>
              Tools Used : <FaReact size={30} color="#61DAFB" title="ReactJS" />{" "}
              <SiReactbootstrap
                size={30}
                color="skyblue"
                title="React Bootstrap"
              />{" "}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="http://to-dolist-react-sathyan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="button mt-2 mb-3">Live Demo</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
