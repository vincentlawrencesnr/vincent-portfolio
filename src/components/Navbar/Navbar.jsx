import "./Navbar.css";

import { useState, useEffect } from "react";

import logo from "../../assets/images/Conqueror3.png";

import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {

  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {

    const sections = document.querySelectorAll("section");
    
    // console.log(sections);
    // console.log(sections.length);
    
    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry)=>{

          if(entry.isIntersecting){

              // console.log(entry.target.id);

              setActiveSection(

                  entry.target.id

              );

            }

          });
      },
      {
          // threshold:0.1

           rootMargin: "-40% 0px -40% 0px",
           threshold: 0
      }

    );

    sections.forEach((section)=>{

    observer.observe(section);

    });



    return ()=>{

        sections.forEach((section)=>{

            observer.unobserve(section);

        });

    };

  }, []);


  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top" data-bs-theme="dark">

      <Container>

        <Navbar.Brand 
        
        onClick={() => {

        document.getElementById("home")

                .scrollIntoView({

                behavior: "smooth"

        });

    }}>
          <img
          src={logo}
          // src = "/vincentFavIcon.png"
          alt="Vincent Eke Logo"
          className="logo"
      />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-navbar" />

        <Navbar.Collapse id="portfolio-navbar">

          <Nav className="ms-auto">

            <Nav.Link

              href="#home"

              className={ activeSection==="home" ? "active-link" : ""  }
              >

              Home

              </Nav.Link>

            <Nav.Link

              href="#about"

              className={ activeSection==="about" ? "active-link" : ""  }
              >

              About

              </Nav.Link>

            <Nav.Link

              href="#journey"

              className={ activeSection==="journey" ? "active-link" : ""  }
              >

              Journey

              </Nav.Link>  

            <Nav.Link

              href="#skills"

              className={ activeSection==="skills" ? "active-link" : ""  }
              >

              Skills

              </Nav.Link>

            <Nav.Link

              href="#projects"

              className={ activeSection==="projects" ? "active-link" : ""  }
              >

              Projects

              </Nav.Link>

            <Nav.Link

              href="#contact"

              className={ activeSection==="contact" ? "active-link" : ""  }
              >

              Contact

              </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Navigation;


/*
Threshold answers

How much of the element must be inside?

RootMargin answers

Inside WHAT area?

They're answering two completely different questions.


###

Now let's combine them

Suppose we have

rootMargin:"-40% 0px -40% 0px",
threshold:0

Step 1

Shrink the observation area.

Viewport

Ignored

-----------------

WATCH HERE

-----------------

Ignored

Step 2

The instant

1 pixel

of a section enters that smaller observation area...

Fire the callback.

So yes,

Threshold is still

0

But it isn't watching the whole viewport anymore.

It's watching only the middle.
*/