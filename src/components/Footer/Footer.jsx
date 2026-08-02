import "./Footer.css";

import { Container, Row, Col } from "react-bootstrap";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp
} from "react-icons/fa6";


export default function Footer() {

    return (

        <footer className="footer">

            <Container>

                <Row>

                    <Col
                        md={4}
                    >

                        <h3> Vincent Eke </h3>

                        <p>

                            Building responsive, modern,
                            and user-friendly software
                            experiences.

                        </p>

                    </Col>



                    <Col md={4}>

                        <h4>

                            Quick Links

                        </h4>

                        <ul className="footer-links">

                            <li>

                                <a href="#home">

                                    Home

                                </a>

                            </li>

                            <li>

                                <a href="#about">

                                    About

                                </a>

                            </li>

                            <li>

                                <a href="#skills">

                                    Skills

                                </a>

                            </li>

                            <li>

                                <a href="#projects">

                                    Projects

                                </a>

                            </li>

                            <li>

                                <a href="#journey">

                                    Journey

                                </a>

                            </li>

                            <li>

                                <a href="#contact">

                                    Contact

                                </a>

                            </li>

                        </ul>

                    </Col>



                    <Col md={4}>

                        <h4>

                            Connect

                        </h4>

                        <div className="footer-socials">

                            <a

                                href="https://github.com/vincentlawrencesnr"

                                target="_blank"

                                rel="noopener noreferrer"

                            >

                                <FaGithub />

                            </a>

                            <a

                                href="https://www.linkedin.com/in/vincent-lawrence-9bb9023b4"

                                target="_blank"

                                rel="noopener noreferrer"

                            >

                                <FaLinkedin />

                            </a>

                            <a

                                href="mailto:vincentlawrence077@gmail.com"

                            >

                                <FaEnvelope />

                            </a>

                        </div>

                    </Col>

                </Row>

                <hr />

                <p className="copyright">

                    © 2026 Vincent Eke.

                   &nbsp; All Rights Reserved.

                </p>

            </Container>

        </footer>

    );

}