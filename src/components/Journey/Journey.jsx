import "./Journey.css";

import { Container } from "react-bootstrap";

export default function Journey() {

    const journey = [

        {
            id:1,
            title:"C Programming",
            description:"My introduction to programming and problem solving."
        },

        {
            id:2,
            title:"JavaScript",
            description:"Learned how to build interactive web applications."
        },

        {
            id:3,
            title:"React",
            description:"Started creating modern and responsive user interfaces."
        },

        {
            id:4,
            title:"MySQL",
            description:"Learned relational databases and SQL."
        },

        {
            id: 5,
            title: "InstantBite",
            description: "Built a React food ordering application with dynamic cart management, reusable components, and state-driven user interactions."
        },

        {
            id:6,
            title:"Moonlight Events",
            description:"Built my strongest frontend project using React."
        },

        {
            id:7,
            title:"XML & JSON",
            description:"Worked with structured data and application communication."
        },

        {
            id:8,
            title:"Java",
            description:"Discovered my passion for Object-Oriented Programming."
        },

        {
            id:9,
            title:"C#",
            description:"Currently strengthening my backend development skills."
        },

        {
            id:10,
            title:"Next...",
            description:"Flutter • Python • Django • Spring Boot"
        }

    ];

    return(

        <section className="journey-section" id="journey">

            <Container>

            <div className="journey-header">

                <h2>My Journey</h2>

                <p>
                    Every great software engineer starts somewhere.
                    Here's the path that has shaped me so far.
                </p>

            </div>

            <div className="timeline">

                {journey.map((item) => (

                    <div
                        className="timeline-item"
                        key={item.id}
                        // data-aos="fade-up"
                        data-aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
                        // data-aos-delay={item.id * 120}
                    >

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>

                    </div>

                ))}

            </div>

        </Container>

        </section>

    );

}


/*

{
    id:10,
    title:"Flutter",
    description:"Started building cross-platform mobile applications."
}


*
Why the parentheses?

Notice this:

journey.map((item) => (

    ...

))

Those () mean:

Return this JSX.

It's the same as writing:

journey.map((item) => {

    return (

        ...

    );

});

The parentheses are just a shorter way of returning JSX.


*
Why do we use {}?

This is something you've already seen.

In JSX,

<h3>{item.title}</h3>

means

"Evaluate this JavaScript expression."

Without the braces,

<h3>item.title</h3>

would literally display

item.title

on the screen.


*
The key

This line:

key={item.id}

is very important.

React uses it to uniquely identify each element.


*
<div class="col-sm-12 col-md-6 col-lg-4">

<Col sm={12} md={6} lg={4}>

*/