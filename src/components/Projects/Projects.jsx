import "./Projects.css";

import { Container, Row, Col, Button } from "react-bootstrap";

import projects from "../../data/projects";

import { FaMicrosoft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import {
    FaReact,
    FaJava,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";

import {
    SiJavascript,
    SiMysql,
    // SiCsharp,
    // SiJdbc,
    SiMongodb
} from "react-icons/si";


const techIcons = {

    React: <FaReact />,

    JavaScript: <SiJavascript />,

    Bootstrap: <FaBootstrap />,

    CSS: <FaCss3Alt />,

    HTML: <FaHtml5 />,

    Java: <FaJava />,

    MySQL: <SiMysql />,

    // JDBC: <SiJdbc />,

    "C#": <FaMicrosoft />,

    Git: <FaGitAlt />,

    GitHub: <FaGithub />,

    MongoDB: <SiMongodb />

};

export default function Projects() {

    return (

        <section
            className="projects-section"
            id="projects"
        >

            <Container>

                <div className="projects-header">

                    <h2> Featured Projects </h2>

                    <p> A collection of applications that demonstrate my passion for building responsive, user-friendly, and modern software solutions.
                    </p>

                </div>

                <Row className="g-4">

                    {

                        projects.map((project) => (

                            <Col lg={6} key={project.id}>

                                <div className="project-card">
                                
                                {

                                    project.featured && ( <span className="featured"> Featured </span>
                                    )

                                }

                                {/* <div className="project-image">

                                    <div className="browser">

                                        <div className="browser-header">

                                            <span></span>

                                            <span></span>

                                            <span></span>

                                        </div>

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />

                                    </div>

                                </div> */}

                                <div className="browser">

                                    <div className="browser-header">

                                        <div className="browser-controls">

                                            <span></span>

                                            <span></span>

                                            <span></span>

                                        </div>

                                        <div className="browser-address">

                                            🔒 {project.browser}

                                        </div>

                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                </div>

                                <div className="project-body">
                                    {/* <h3> {project.title} </h3> */}

                                    <div className="project-title">

                                        <h3>{project.title}</h3>

                                        <span className={`status ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>

                                            {project.status}

                                        </span>

                                    </div>

                                    <p> {project.description}</p>


                                    <div className="tech-stack">

                                        {
                                            project.technologies.map((tech) => (

                                                <span key={tech} className="tech-badge"> 
                                                <>
                                                    {techIcons[tech]}

                                                    <span>
                                                        {tech}
                                                    </span>
                                                </> 
                                                </span>

                                            ))
                                        }

                                    </div>

                                    <div className="project-buttons">

                                    <Button

                                        href={project.github}

                                        target="_blank"

                                        rel="noopener noreferrer"
                                        // variant="dark"
                                    >

                                        <FaGithub />

                                        {" "}GitHub


                                    </Button>

                                    {

                                    project.live && (

                                    <Button

                                    href={project.live}

                                    target="_blank"

                                    variant="primary"

                                    rel="noopener noreferrer"

                                    >

                                    <FiExternalLink />

                                    {" "}Live Demo

                                    </Button>

                                    )

                                }

                                </div>

                                </div>   

                                
                            </div>
                            </Col>

                        ))

                    }
                </Row>

            </Container>

        </section>

    );

}

/*

But instead of replacing a normal word...

we're replacing a pattern.

That pattern is

/\s+/g

This is called a Regular Expression (often shortened to Regex).

Don't worry—we're going to learn just enough to understand this one.

Breaking Down /\s+/g

Let's split it into pieces.

/

This simply tells JavaScript,

"Everything between these slashes is a regular expression."

Think of it as the opening and closing brackets of the pattern.

\s

This is the important part.

Yes!

You guessed correctly.

\\s means

Any whitespace character.

That includes:

Space " "
Tab \t
New line \n

In our case, we're interested in ordinary spaces.

Example

In Progress
  ^

That space is matched by

\s
What does the + mean?

The plus sign means

One or more.

Example

Suppose the text is

In   Progress

There are three spaces.

Without the +

/\s/

JavaScript matches

(space)
(space)
(space)

one at a time.

With

/\s+/

JavaScript says

"Treat all consecutive spaces as one match."

So

"   "

is matched as a single group.

That's much cleaner.

What does the g mean?

g stands for

Global

Without g

JavaScript replaces only the first match.

Example

"A B C".replace(/\s/, "-")

Result

A-B C

Only the first space changes.

With g

"A B C".replace(/\s/g, "-")

Result

A-B-C

Every space is replaced.

Putting It All Together

We start with

"In Progress"

↓

Lowercase

"in progress"

↓

Find every space

"in progress"

↓

Replace it with

-

↓

Result

"in-progress"
Why do we need this?

Remember our CSS.

.status.completed{

}

and

.status.in-progress{

}

Notice something.

CSS class names cannot contain spaces.

This is wrong:

<span class="status In Progress">

The browser thinks there are three classes:

status

In

Progress

instead of one.

We want a single class.

So we convert

In Progress

into

in-progress

Now the HTML becomes

<span class="status in-progress">

Perfect.

Now it matches

.status.in-progress{

}


###

CSS Without a Space

We wrote

.status.completed{

    background:green;

}

Read this as English:

"Select an element that has BOTH the status class AND the completed class."

So CSS looks for

<span class="status completed">

This matches perfectly.


###

What if we wrote a space?

.status .completed{

}

Notice the space.

That completely changes the meaning.

Now CSS reads it as:

"Find an element with class completed that is INSIDE another element with class status."

Visual:

<div class="status">

    <span class="completed">

    </span>

</div>


Think of the Space as Meaning "Inside"

Whenever you see

.parent .child

translate it into English as:

"Find .child inside .parent."



NOTE:

By default, React Bootstrap uses:

variant="primary"
*/


/*
When we finish that, we'll do one final pass over the entire portfolio, adding the little finishing touches—loading animations, scroll reveals, active navbar highlighting, and any responsive refinements. That's when it will truly feel production-ready. 🚀
*/