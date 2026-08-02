import "./Hero.css";

import avatar from "../../assets/images/avatarII.png";

import { Row, Col, Button, Container } from "react-bootstrap";

import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="hero-section" id="home">

        <Container>
            <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col lg={6} className="hero-content">

            <p className="hero-greeting">
              Hello, I'm
            </p>

            <h1 className="hero-name">
              Vincent Eke
            </h1>

            <h2 className="hero-title">

            <TypeAnimation
            sequence={[
            "Software Engineer",
            2000,

            "Java Backend Developer",
            2000,

            "React Frontend Developer",
            2000,

            "Full Stack Developer",
            2000,

            "Continuous Learner",
            2000
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            />

            </h2>

            <p className="hero-description">
              I build responsive web applications and scalable backend
              solutions using React, Java, C#, and MySQL while continuously
              learning modern technologies to create software that solves
              real-world problems.
            </p>

            <div className="hero-buttons">

              <Button className="primary-btn" href="#projects">
                View Projects
              </Button>

              <Button
                as="a"
                href="/Vincent_Chibuike_Eke_Resume.pdf"
                download
                className="secondary-btn"
            >
                {/* Download Resume */}
                <FaDownload />

                &nbsp;&nbsp;

                Download Resume
            </Button>
            </div>

            <div className="hero-socials">

            <a
              href="https://github.com/vincentlawrencesnr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/vincent-lawrence-9bb9023b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:vincentlawrence077@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6} className="hero-image">

            <div className="hero-avatar-container">

            <div className="avatar-glow"></div>

            <img
              src={avatar}
              alt="Vincent Eke"
              className="hero-avatar"
          />

          </div>

          </Col>

        </Row>

        {/* scroll indicator */}

          <div className="scroll-indicator">

            <a href="#about">

                <span>Scroll Down</span>


                <FaArrowDown className="scroll-icon" />

            </a>

        </div>
        </Container>
      
    </section>
  )
}


/*

In React Bootstrap, setting as="a" on a Button component instructs React to change the underlying HTML element from a <button> to an anchor <a> tag while keeping all the visual styling of a Bootstrap button.

This allows you to create an element that visually looks like a styled button but structurally behaves like a link, making it capable of accepting link-specific attributes such as href.
*/