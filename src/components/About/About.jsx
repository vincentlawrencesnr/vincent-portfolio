import "./About.css";

import { Container, Row, Col } from "react-bootstrap";

import {
  FaLaptopCode,
  FaPuzzlePiece,
  FaDumbbell,
  FaBookOpen
} from "react-icons/fa";

export default function About() {

    return (

        <section className="about-section" id="about">

            <Container>

                <div className="section-title">

                    <span>ABOUT ME</span>

                    <h2>
                        Thoughtful Design.
                        <br />
                        Solid Engineering.
                    </h2>

                </div>

                <Row className="align-items-center">

                    <Col lg={7}>

                        <div className="about-content">

                            <p>

                                I believe great software combines thoughtful
                                design with solid engineering. Every project I
                                build is an opportunity to solve problems,
                                improve my skills, and create experiences that
                                people genuinely enjoy using.

                            </p>

                            <p>

                                My journey into software development began with
                                C programming before expanding into JavaScript,
                                React, XML, JSON, and eventually Java, where I
                                developed a deep appreciation for object-oriented
                                programming and backend development. Today, I am
                                strengthening my backend skills with C# and .NET
                                while continuing to build modern web applications.

                            </p>

                            <p>

                                As a Software Engineering student at Aptech, I
                                continuously challenge myself to learn new
                                technologies and improve with every project.
                                Looking ahead, I am excited to explore Flutter,
                                Python, Django, and Spring Boot as I continue
                                growing into a well-rounded software engineer.

                            </p>

                        </div>

                    </Col>

                    <Col lg={5}>

                        <div className="about-cards">

                            <div className="about-card">

                                <FaLaptopCode />

                                <h4>Building Solutions</h4>

                            </div>

                            <div className="about-card">

                                <FaPuzzlePiece />

                                <h4>Analytical Thinking</h4>

                            </div>

                            <div className="about-card">

                                <FaDumbbell />

                                <h4>Fitness Enthusiast</h4>

                            </div>

                            <div className="about-card">

                                <FaBookOpen />

                                <h4>Always Improving</h4>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}


/*

repeat()

Instead of writing

1fr 1fr

we can simply write

repeat(2,1fr)

It means

Repeat

2 times

1fr

So the browser converts

repeat(2,1fr)

into

1fr 1fr

Exactly the same thing.


*
Flexbox and Grid solve different kinds of layout problems.

Use Flexbox when you're arranging items in one direction:

Home  About  Skills  Contact

That's a row (or a column).


Use Grid when you're arranging items in both rows and columns:

□  □
□  □

A good rule of thumb is:

Flexbox = one-dimensional layout (row or column).
Grid = two-dimensional layout (rows and columns).


*
document.getElementById("scrollBtn").addEventListener("click", function () {

    const aboutSection = document.getElementById("about");

    aboutSection.scrollIntoView({

        behavior: "smooth"

    });

});


aboutSection.scrollIntoView()

This is another built-in browser function.

You're telling the browser:

"Bring this element into view."

Without any options, it jumps instantly.


*
import { useRef } from "react";

function App() {

    const aboutRef = useRef(null);

    const scrollToAbout = () => {

        aboutRef.current.scrollIntoView({

            behavior: "smooth"

        });

    };

    return (

        <>
            <button onClick={scrollToAbout}>

                Scroll Down

            </button>

            <section ref={aboutRef}>

                About

            </section>
        </>

    );

}


Why .current?

This confuses almost everyone.

When you write

const aboutRef = useRef(null);

React DOES NOT store the element directly.

Instead,

it creates an object.

Like this:

const aboutRef = {

    current: null

};

Notice.

It's actually an object.

Later React changes it to

const aboutRef = {

    current: <section>

};

So

aboutRef

is NOT the section.

It's an object.

The actual section lives inside

.current
*/