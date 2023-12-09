import { hero, logo, meta, shopify, starbucks, tesla} from "../assets/images";
import firebase from '../assets/images/firebase.png'
import flutter from '../assets/images/flutter.png'
import leedcode from '../assets/images/leedcode.png'
import ss from '../assets/images/ss.webp'
import vesit from '../assets/images/vesit.webp'
import ninja from '../assets/images/ninja.png'
import gfg from '../assets/images/gfg.jpeg'

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import CTA from "../Components/CTA";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: firebase ,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Application Backend Developer Intern",
        company_name: "VESIT",
        icon: vesit,
        iconBg: "#accbe1",
        date: "May 2020 - June 2021",
        points: [
            "Reduced student printing expense beyond 200 copies by 33% by developing a printing app using Flutter, Node.js, Express, and Firebase.",
            "Achieved significant time and effort saving for students by integrating features like remote file uploading and printing with customization like number of copies, single/ both sides while persisting the printing data in the database .",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    
    {
        title: "Application Developer Intern",
        company_name: "Stealth Startup",
        icon: ss,
        iconBg: "#a2d2ff",
        date: "July 2023 - Present",
        points: [
            "Developed a mobile app with Flutter and Firestore for optimized package delivery through collective mobility, reducing costs by 21% and eliminating traditional inefficiencies. Additionally contributed to formulating the delivery pricing model.",
            "Designed the database schema, integrated Aadhar and PAN APIs for traveler verification, and implemented face verification using a Teachable Machine for enhanced security.",
        ],
    },
    {
        title: "Looking for more Internships and Jobs",
        company_name: "",
        icon: summiz,
        iconBg: "#b7e4c7",
        date: "",
        points: [
            ""
        ],
    },
];

export const socialLinks = [
    {
        name: 'leedcode',
        iconUrl: leedcode,
        link: 'https://leetcode.com/dipanshughime/',
    },
    {
        name: 'CodeStudio',
        iconUrl: ninja,
        link: 'https://www.codingninjas.com/studio/profile/dipanshughime',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dipanshughime',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dipanshu-ghime-a57388230/',
    },
    {
        name: 'geeksforgeeks',
        iconUrl: gfg,
        link: 'https://auth.geeksforgeeks.org/user/dipanshu7ch4',
    },
    
    
    
];



export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/dipanshughime/Estate',
    },
    {
        iconUrl: "https://i.gifer.com/yy3.gif ",
        theme: 'btn-back-red',
        name: 'Learniverse student toolkit',
        description: 'Developed Lerniverse, a student-focused website designed to centralize study resources. This project was built using ReactJS and integrated a Notion database for efficient note-taking and scheduling. Additional features included a chatbot and an article summarization tool using the DELL-E API for a compre- hensive educational platform.',
        link: 'https://github.com/dipanshughime/Learniverse_student_toolkit',
    },
    {
        iconUrl: flutter,
        theme: 'btn-back-green',
        name: 'Smart Printer App',
        description: 'Reduced student printing expense beyond 200 copies by 33% by developing a printing app using Flutter,Node.js, Express, and Firebase.Achieved significant time and effort saving for students by integrating features like remote file uploading and printing with customization like number of copies, single/ both sides while persisting the printing data in the database',
        link: 'https://github.com/dipanshughime/Printify',
    },
    {
        iconUrl: flutter,
        theme: 'btn-back-yellow',
        name: 'Travel Advisor app',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs. Achieved significant time and effort saving for students by integrating features like remote file uploading and printing with customization like number of copies, single/ both sides while persisting the printing data in the databas',
        link: 'https://github.com/CMPN-CODECELL/Syrus_Web2_ZeroTwo.git',
    },
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'News Website',
        description: 'Website that updates about news Implemented using React.js and News API.',
        link: 'https://github.com/dipanshughime/News-Updates',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI-Hub',
        description: 'Developed an AI Image Generation Website using MERN Stack with DALL-E AI API which generates unique and imaginative images based on given prompts.',
        link: 'https://github.com/dipanshughime/AIhub',
    }
];