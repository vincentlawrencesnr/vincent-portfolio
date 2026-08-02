import moonlight from "../assets/images/moonlight.jpeg"; 
import moonlight2 from "../assets/images/moonlight2.jpeg"; 
import instantBite from "../assets/images/instantBite.jpeg";
import musicplayer from "../assets/images/musicplayerJava.jpeg";
import travelJapa from "../assets/images/travelJapaCS.jpeg";

const projects = [

    {

        id: 1,

        title: "InstantBite",

        image:instantBite,

        description:
            "A modern food ordering web application that allows users to browse meals, add items to a shopping cart, filter menu categories, and enjoy a responsive user experience.",

        technologies: [

            "React",

            "JavaScript",

            "Bootstrap",

            "CSS"

        ],

        github:
            "https://github.com/vincentlawrencesnr/instantBite",

        live:
            "https://instant-bite.vercel.app",

        browser: "instant-bite.vercel.app",

        status: "Completed",

        featured: true

    },

    {

        id: 2,

        title: "Moonlight Events",

        image: moonlight2,

        description:
            "A modern event management website that allows users to explore upcoming festivals, filter events by month and category, view detailed information in elegant modals, and download event details as PDF documents.",

        technologies: [

            "React",

            "JavaScript",

            "Bootstrap",

            "CSS"

        ],

        github:
            "https://github.com/vincentlawrencesnr/MoonlightEvents---Festival-App",

        live:
            "https://moonlight-events-five.vercel.app",

        browser: "moonlight-events-five.vercel.app",

        status: "Completed",

        featured: true

    },

     {

        id: 3,

        title: "JavaFX Music Player",

        image: musicplayer,

        description:
            "A desktop music player built with JavaFX featuring playlist management, playback controls, progress tracking, volume adjustment, album artwork display, and an intuitive user interface.",

        technologies: [

            "Java",

            "JavaFX",

            "CSS"

        ],

        github:
            "https://github.com/vincentlawrencesnr",

        live:
            "",
        browser: "Desktop Application",

        status: "Completed",

        featured: false

    },

    {

        id: 4,

        title: "TravelJapa",

        image: travelJapa,

        description:
            "A Windows desktop travel booking application built with C# and Windows Forms. The application focuses on user management, destination booking, and database integration using MySQL.",

        technologies: [

            "C#",

            "Windows Forms",

            "MySQL",

            "MySQL Connector"

        ],

        github:
            "https://github.com/vincentlawrencesnr",

        live:
            "",

        browser: "Desktop Application",

        status: "In Progress",

        featured: false

    }

];

export default projects;