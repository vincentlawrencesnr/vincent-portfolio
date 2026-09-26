 import instantbite from "../assets/images/instantbite-home.png";
import musicplayer from "../assets/images/musicplayerJava.jpeg";
import travelJapa from "../assets/images/travelJapaCS.jpeg";
import freshfind from "../assets/images/freshfind-home.png";
import moonlightevents from "../assets/images/moonlightevents-home.png";

const projects = [
    {

        id: 1,

        title: "FreshFind",

        image: freshfind,

        description:
            "A responsive local market discovery platform that helps users explore fresh-produce markets, filter and sort market listings, check real-time market status, find nearby markets using browser geolocation, calculate distances, explore produce, and access market locations through Google Maps.",

        technologies: [

            "React",

            "JavaScript",

            "React Router",

            "Vite",

            "CSS",

            "Browser Geolocation API",

            "LocalStorage"

        ],

        github:
            "https://github.com/vincentlawrencesnr/freshfind",

        live:
            "https://freshfind-alpha.vercel.app",

        browser: "freshfind-alpha.vercel.app",

        status: "Completed",

        featured: true

    },

    {

        id: 2,

        title: "InstantBite",

        image:instantbite,

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

        id: 3,

        title: "Moonlight Events",

        image: moonlightevents,

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

        id: 4,

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

        id: 5,

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