import "./ScrollToTop.css";

import { useState, useEffect } from "react";

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    
    useEffect(() => {

        const handleScroll = () => {

            if(window.scrollY > 400){

                setShowButton(true);

            }

            else{

                setShowButton(false);

            }

        };

        window.addEventListener(

            "scroll",

            handleScroll

        );

        return () => {

            window.removeEventListener(

                "scroll",

                handleScroll

            );

        };

    }, []);


    const scrollToTop = () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        };


    return (

        <>
        {
                showButton && (

                    <button className="scroll-top-btn" onClick={scrollToTop}>

                        <FaArrowUp />

                    </button>

                )
            }
        </>

    );

}

/*

window.scrollY

only reads the current scroll position.

For example

window.scrollY

↓

850

It tells us where we are.

window.scrollTo()

is the opposite.

Instead of reading...

It moves the page.


#  #  #  #


An effect with an empty dependency array runs once after the component mounts.

Notice I didn't say never runs.

I said runs once.

Let's walk through the entire lifecycle.

Step 1 — React starts rendering the component

When React reaches

<ScrollToTop />

it calls your function.

function ScrollToTop() {

    ...
}

Everything inside the function starts executing from top to bottom.

Suppose you have

const [showButton, setShowButton] = useState(false);

React creates

showButton = false

Then it reaches

useEffect(() => {

    ...

}, []);

Now here's something many beginners think.

They think React immediately executes everything inside.

It does NOT.

Instead React says

"I see an effect."

"I'll remember it."

Think of it as React putting the effect on a to-do list.

So at this moment

Component Rendering

↓

useState()

↓

useEffect()

↓

React remembers it

↓

Continue rendering

↓

return(...)

Notice that the effect has not executed yet.

Step 2 — React finishes rendering

React now creates the real HTML.

<div>

<button>

...

</button>

</div>

and puts it into the browser.

This is called

Mounting

because the component has now been mounted onto the page.

So now your screen finally shows

Hero

About

Projects

...
Step 3 — React now checks the dependency array

React now says

"Okay, the component has mounted."

Then it looks at

[]

An empty dependency array means

"Run this effect after the first mount."

So React executes

() => {

    ...

}

for the very first time.

This is why your code runs.

Not because dependencies changed.

Not because state changed.

Simply because

The component has just mounted.

That's the one automatic execution.

Let's visualize it
Component starts

↓

React reads useEffect()

↓

React DOES NOT execute it yet

↓

React renders the UI

↓

Component mounted

↓

React sees []

↓

Run effect ONE TIME
Step 4 — What happens inside the effect?

Now React enters

const handleScroll = () => {

    if(window.scrollY > 400){

        setShowButton(true);

    }

    else{

        setShowButton(false);

    }

};

Notice something.

At this moment

handleScroll is NOT running.

We are simply creating a function.

Exactly the same as writing

const greet = () => {

    console.log("Hello");

};

Does this print

Hello

No.

Because we only created the function.

We didn't call it.

The same thing happens here.

We created

handleScroll

Nothing more.

Step 5 — Then this line executes
window.addEventListener(

    "scroll",

    handleScroll

);

This is the important line.

Notice we did NOT write

handleScroll()

We wrote

handleScroll

without parentheses.

Why?

Because we are not calling the function ourselves.

We're handing the function over to the browser.

It's like saying

Browser...

Here is a function.

Keep it.

Whenever someone scrolls...

You call it.

So after this line

the browser stores

handleScroll

inside its list of scroll listeners.

React is now finished

The effect ends.

Nothing else happens.

The browser is simply waiting.

Imagine the browser saying

...

...

...

Nobody is scrolling...

...

...

Still waiting...
Step 6 — You finally scroll

The moment you move the mouse wheel

the browser fires

scroll

Because earlier we told it

window.addEventListener(

    "scroll",

    handleScroll

);

the browser immediately executes

handleScroll()

Notice...

React did NOT call it.

The browser called it.

That's a huge distinction.

Step 7 — handleScroll executes

Now

window.scrollY

might be

650

React checks

if(window.scrollY > 400)

which becomes

if(650 > 400)

That's

true

So

setShowButton(true);

runs.

Step 8 — State changed

Whenever you call

setShowButton(...)

React says

State changed.

Render the component again.

So React runs your component again from top to bottom.

Here's the part that confuses almost everyone

The component renders again.

React reaches

useEffect(..., []);

again.

Now React checks the dependency array.

[]

React asks

Has this component already mounted?

The answer is

Yes.

Then React asks

Are there any dependencies that changed?

There aren't any.

The dependency array is empty.

So React says

Then DON'T run the effect again.

The component re-rendered.

The effect did not.

That's why your scroll listener isn't added again every time the button appears or disappears.

Finally, what about the cleanup?

When your component is removed from the page—for example, if you navigated to another page—React runs

return () => {

    window.removeEventListener(

        "scroll",

        handleScroll

    );

};

This removes the listener from the browser.

Without it, the browser would keep listening for scroll events even though the component no longer exists.

The complete story
React renders component
        │
        ▼
Reads useEffect()
        │
        ▼
Remembers the effect
        │
        ▼
Renders the UI
        │
        ▼
Component mounted
        │
        ▼
Runs the effect ONCE (because of [])
        │
        ▼
Creates handleScroll()
        │
        ▼
Registers handleScroll with the browser
        │
        ▼
Effect finishes
        │
        ▼
User scrolls
        │
        ▼
Browser calls handleScroll()
        │
        ▼
handleScroll updates state
        │
        ▼
React re-renders the component
        │
        ▼
React sees [] again
        │
        ▼
Effect does NOT run again

This is one of those concepts that separates people who can use React from people who actually understand React. The key realization is that useEffect and addEventListener are doing different jobs:

useEffect runs once after the component mounts (because of []) and sets everything up.
addEventListener tells the browser what to do later, whenever a scroll happens.
After that setup is complete, the browser—not React—is responsible for calling handleScroll every time the user scrolls.

Once you see those as two separate phases—setup and event handling—the entire flow becomes much easier to reason about.


ALWAYS REMEMBER:

React still renders from top to bottom first. It does NOT stop in the middle to execute useEffect. It always finishes rendering first, then after the render is committed, it decides whether each effect should run based on its dependencies.   -   even on re-rendering when state changes.



This is the key point

You asked:

Does React check the effect while rendering?

YES.

But only to decide

Should I run this later?

NOT

Run it now.

Those are two completely different things.
*/