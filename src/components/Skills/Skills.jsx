import "./Skills.css";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";


const skillCategories = [

    {
        title: "Programming Languages",
        skills: [
            { name: "Java", level: 90 },
            { name: "JavaScript", level: 95 },
            { name: "C", level: 75 },
            { name: "C#", level: 75 }
        ]
    },

    {
        title: "Frontend",
        skills: [
            { name: "React", level: 90 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 95 },
            { name: "Bootstrap", level: 90 }
        ]
    },

    {
        title: "Backend & Database",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "JDBC", level: 85 },
            { name: "MySqlConnector", level: 80 },
            { name: "MongoDB", level: 85 }
        ]
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", level: 75 },
            { name: "GitHub", level: 80 },
            { name: "VS Code", level: 95 },
            { name: "IntelliJ IDEA", level: 90 },
            { name: "Visual Studio", level: 80 },
            { name: "Maven", level: 80 }
        ]
    }

];

export default function Skills() {

  const [animate, setAnimate] = useState(false);

  const skillsRef = useRef(null);


//   useEffect(() => {

//     setAnimate(true);

// }, []);

useEffect(() => {

    const observer = new IntersectionObserver(

        (entries) => {

            if (entries[0].isIntersecting) {

                setAnimate(true);

                observer.unobserve(entries[0].target);

            }
        },

        {
            threshold:0.3    // optional: adjust this value to control when the animation starts
        }

    );

    observer.observe(skillsRef.current);

    return () => observer.disconnect();

}, []);


  return (
        <section className="skills-section" id="skills" ref={skillsRef}>

            <Container>

                <div className="skills-header">

                    <h2>Skills & Technologies</h2>

                    <p>
                        Technologies I've learned through coursework,
                        personal projects, and continuous practice.
                    </p>

                </div>

                <Row>

                    {skillCategories.map((category) => (

                        <Col lg={6} className="mb-4" key={category.title}>

                            <div className="skill-card">

                            <h3>{category.title}</h3>

                            {

                                category.skills.map((skill) => (

                                    <div
                                        className="skill"
                                        key={skill.name}
                                    >

                                        <div className="skill-info">

                                            <span>{skill.name}</span>

                                            <span>{skill.level}%</span>

                                        </div>

                                        <div className="progress-bar">

                                            <div
                                                className="progress-fill"
                                                style={{ width: animate ? `${skill.level}%` : "0%" }}
                                            ></div>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>
  )
}


/*

Let's explain useEffect from the beginning

This is the most important part, so let's build it step by step.

Step 1

React renders your component.

function Skills() {

}

The browser now sees

Skills section

Step 2

React creates the state.

const [animate, setAnimate] = useState(false);

Current state:

animate

↓

false

Step 3

React creates the ref.

const skillsRef = useRef(null);

Initially

skillsRef.current

↓

null

because the <section> doesn't exist yet.

Step 4

React renders the JSX.

<section

ref={skillsRef}

>

...

Now the section actually exists.

React automatically changes

skillsRef.current

↓

<section>

Now our ref points to the real HTML element.

Step 5

After rendering finishes,

React runs

useEffect(...)

because of

[]

Remember:

Empty dependency array

↓

Run once

↓

After the component has rendered

Step 6

Inside the effect

we create an observer.

const observer =
new IntersectionObserver(...)

Imagine hiring a security guard.

👮

Waiting...

Step 7

We tell him

what to watch.

observer.observe(skillsRef.current);

which means

Watch THIS section.

Now the guard is standing beside

Skills

Step 8

The user scrolls.

The browser checks

Is Skills visible?

If NO

isIntersecting

↓

false

Nothing happens.

If YES

isIntersecting

↓

true

The callback runs.

Step 9

Inside the callback

setAnimate(true);

React changes

animate

↓

true

Step 10

React re-renders the component.

Now

style={{

width:

animate

?

`${skill.level}%`

:

"0%"
}}

becomes

width:90%

width:95%

width:75%

CSS already has

transition:width 1.5s;

so the browser animates the bars.

*
What is threshold?

This line

threshold:0.3

means

30%

Imagine the Skills section.

□□□□□□□□□□

When about

30%

is visible

the browser says

Go!

If we wrote

threshold:1

then

the entire section

must be visible.

If

threshold:0

even

one tiny pixel

would trigger it.

I think

0.3

is perfect.

Cleanup

This line

return ()=>observer.disconnect();

is VERY important.

It means

When this component disappears...

stop watching.

Otherwise

the browser

keeps watching forever.

That's called a

memory leak.

Professional React developers always clean up observers, timers, and event listeners when they're no longer needed.

4. Your question about entries[0]

This is an excellent question.

Yes!

entries is an array.

You noticed something many beginners don't.

Suppose we observe one element.

observer.observe(skillsRef.current);

Then the callback receives

entries

which could look like

[
    {
        target: skillsRef.current,
        isIntersecting: true
    }
]

So

entries[0]

is our Skills section.

What if we observe two sections?

Absolutely possible.

Imagine:

observer.observe(skillsRef.current);

observer.observe(projectsRef.current);

Now the observer is watching two different elements.

The browser might give you something like:

entries = [

    {
        target: skillsRef.current,
        isIntersecting: true
    },

    {
        target: projectsRef.current,
        isIntersecting: false
    }

];

So:

entries[0]

could refer to the Skills section, and

entries[1]

could refer to the Projects section.

However, here's something important:

You should not rely on entries[0] always being the Skills section or entries[1] always being the Projects section.

The browser doesn't guarantee the order of the entries. Instead, it's common to loop through them:

entries.forEach((entry) => {

    if (entry.isIntersecting) {

        console.log(entry.target);

    }

});

This way, you respond to whichever observed element triggered the callback.

*
Before we move on...

There's one thing I'd like to improve after you've tested this.

Right now, if the user scrolls away and comes back, the observer still exists, even though we've already started the animation.

A small optimization is to stop observing immediately after the first animation:

if (entries[0].isIntersecting) {
    setAnimate(true);
    observer.unobserve(entries[0].target);
}

This says:

"I've seen the Skills section once, I've triggered the animation, I don't need to watch it anymore."
*/