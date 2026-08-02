import "./Contact.css";

import { useState, useRef  } from "react";

import { Container, Row, Col } from "react-bootstrap";

import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaLocationDot,
    FaRegCopy,
    FaCheck
} from "react-icons/fa6";

import {

    FaCircleCheck,

    FaTriangleExclamation

} from "react-icons/fa6";



export default function Contact(){

    const [copied, setCopied] = useState(false);

    const [successMessage, setSuccessMessage] = useState(false);

    const [errorMessage, setErrorMessage] = useState(false);

    const form = useRef();



    const copyEmail = () => {

    navigator.clipboard.writeText(

        "vincentlawrence077@gmail.com"

    );

    setCopied(true);

    setTimeout(() => {

        setCopied(false);

    }, 2000);

};



const sendEmail = (e) => {

    e.preventDefault();

    emailjs

        .sendForm(

            "service_dzpvj86",

            "template_clh0kpi",

            form.current,

            "I5GDzwu0C_0BZ_k_N"

        )

        .then(

            () => {

                // alert("Message sent successfully!");

                setSuccessMessage(true);

                form.current.reset();

                setTimeout(() => {

                    setSuccessMessage(false);

                }, 3500);

            },


            (error) => {

                // alert("Something went wrong.");

                setErrorMessage(true);

                setTimeout(() => {

                    setErrorMessage(false);

                },3500);

                console.log("EmailJS Error:", error);

                console.log(error.text);

            }

        );

};

    return(

        <section
            className="contact-section"
            id="contact"
        >

            <Container>

                <div className="section-header">

                    <h2>

                        Let's Build Something Great Together

                    </h2>

                    <p>

                        I'm always open to discussing new opportunities,
                        collaborating on exciting projects, or simply connecting
                        with fellow developers.

                    </p>

                </div>

                <Row>

                    <Col
                        lg={5}
                    >

                        {/* Contact Info */}

                        <div className="contact-info">

                            <div className="contact-card">

                                <div className="contact-icon">

                                    <FaEnvelope />

                                </div>

                                <div>

                                    <h4>Email</h4>

                                    {/* <a href="mailto:vincentlawrence077@gmail.com">

                                        vincentlawrence077@gmail.com

                                    </a> */}

                                    <div className="email-row">

                                        <a href="mailto:vincentlawrence077@gmail.com">

                                            vincentlawrence077@gmail.com

                                        </a>

                                        <button

                                            className="copy-btn"

                                            onClick={copyEmail}

                                        >

                                            {

                                                copied ? <FaCheck /> : <FaRegCopy />

                                            }

                                        </button>

                                    </div>

                                </div>

                            </div>

                            <div className="contact-card">

                                <div className="contact-icon">

                                    <FaGithub />

                                </div>

                                <div>

                                    <h4>GitHub</h4>

                                    <a

                                        href="https://github.com/vincentlawrencesnr"

                                        target="_blank"

                                        rel="noopener noreferrer"

                                    >

                                        github.com/vincentlawrencesnr

                                    </a>

                                </div>

                            </div>

                            <div className="contact-card">

                                <div className="contact-icon">

                                    <FaLinkedin />

                                </div>

                                <div>

                                    <h4>LinkedIn</h4>

                                    <a

                                        href="https://www.linkedin.com/in/vincent-lawrence-9bb9023b4"

                                        target="_blank"

                                        rel="noopener noreferrer"

                                    >

                                        Connect with me

                                    </a>

                                </div>

                            </div>

                            <div className="contact-card">

                                <div className="contact-icon">

                                    <FaLocationDot />

                                </div>

                                <div>

                                    <h4>Location</h4>

                                    <p>

                                        Lagos, Nigeria

                                    </p>

                                </div>

                            </div>

                        </div>

                    </Col>

                    <Col
                        lg={7}
                    >

                        {/* Contact Form */}

                        <form className="contact-form"  ref={form} onSubmit={sendEmail}>

                            <div className="form-group">

                                <label>

                                    Full Name

                                </label>

                                <input

                                    type="text"

                                    placeholder="Enter your name"

                                    name="from_name"

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Email Address

                                </label>

                                <input

                                    type="email"

                                    placeholder="Enter your email"

                                    name="from_email"

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Subject

                                </label>

                                <input

                                    type="text"

                                    placeholder="Project inquiry"

                                    name="subject"

                                    required

                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Message

                                </label>

                                <textarea

                                    rows="6"

                                    placeholder="Tell me about your project..."

                                    name="message"

                                    required

                                ></textarea>

                            </div>

                            <button

                                type="submit"

                                className="send-btn"

                            >

                                Send Message

                            </button>

                        </form>

                    </Col>

                </Row>

            </Container>

            {/* success message */}

               {
                    successMessage && (

                        <div className="custom-toast success-toast">

                            <div className="toast-icon">

                                {/* ✓ */}

                                <FaCircleCheck />

                            </div>

                            <div>

                                <h4>

                                    Message Sent!

                                </h4>

                                <p>

                                    Thank you for reaching out.

                                    I'll get back to you as soon as possible.

                                </p>

                            </div>

                        </div>

                    )
                }

                 {/* error message */}

                {
                    errorMessage && (

                        <div className="custom-toast error-toast">

                            <div className="toast-icon">

                                {/* ! */}

                                <FaTriangleExclamation />

                            </div>

                            <div>

                                <h4>

                                    Something went wrong

                                </h4>

                                <p>

                                    Please try again.

                                </p>

                            </div>

                        </div>

                    )
                }        

        </section>

    );

}


/*

Clipboard API

const copyEmail = () => {

    navigator.clipboard.writeText(

        "vincentlawrence077@gmail.com"

    );

    setCopied(true);

    setTimeout(() => {

        setCopied(false);

    }, 2000);

};


First
navigator.clipboard

This is part of the browser.

Think of

navigator

as

"The browser."

The browser has many built-in features.

One of them is

clipboard

which represents your clipboard.

Exactly the same clipboard you use when pressing

Ctrl + C
Then
writeText()

means

Put text onto the clipboard.

So

navigator.clipboard.writeText(

    "VincentLawrence077@gmail.com"

);

is basically the browser saying

Copy this text.

Next
setCopied(true);

Immediately after copying

React updates

copied

to

true
Then
setTimeout()

This waits

2000

milliseconds.

How many seconds?

1000 ms = 1 second

2000 ms = 2 seconds

After two seconds

setCopied(false);

runs.

So the state returns to normal.


###
Notice the double curly braces.

These are called template variables.

Later React will send values into them.

For example

{{from_name}}

might become

Vincent Eke

Save the template.

You'll now get something like

template_a93j2x

Save that too.



###

sendForm()

Instead of sending each input manually...

EmailJS reads everything inside

form.current

It automatically collects

Name

Email

Subject

Message

and sends them.

That's why we're using useRef.

Step 6 — Connect the Form

Change

<form className="contact-form">

to

<form

    ref={form}

    onSubmit={sendEmail}

    className="contact-form"

>

Now...

When you click

Send Message

React executes

sendEmail()

instead of refreshing the page.
*/