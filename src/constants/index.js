import { meta, shopify, starbucks, tesla,sathya,L_T,anchor } from "../assets/images";
import { 
    car,
    contact,
    css,
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
    tailwindcss,
    threads,
    snapgram ,
    estate ,
    summiz,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [ 
    {
        title: "OS Operator",
        company_name: "PSA SICAL HARBOUR",
        icon: anchor,
        iconBg: "#b7e4c7",
        date: "June 2017 - Nov 2020",
        points: [
            "Collaborated with PSA SICAL HARBOUR to develop a comprehensive port management system.",
            "Enhanced security features to ensure compliance with international regulations and protect sensitive data.",
            "Conducted thorough testing and validation to guarantee system robustness and performance under diverse operating conditions.",
            "Designed with scalability and reliability to handle large volumes of maritime traffic and cargo",
        ],
    },

    {
        title: "Sales Executive",
        company_name: "Larsen & Toubro MicroFinance",
        icon: L_T,
        iconBg: "#FFFF00",
        date: "Dec 2020 - March 2023",
        points: [
            " Larsen & Toubro Microfinance is committed to providing inclusive financial services to underserved communities, including small business owners, entrepreneurs. ",
            "Women borrowers often use microfinance loans to start or grow small businesses, such as tailoring, agriculture, handicrafts, and retail, contributing to economic development and poverty alleviation.",
            "Individuals without access to traditional banking services.",
            "Community-driven financial support",
        ],
    },
    {
        title: "CRM Executive",
        company_name: "Sathya Corporate office",
        icon: sathya,
        iconBg: "#fbc3bc",
        date: "April 2023 - Present",
        points: [
            "Contact Management: Organize and manage customer contact information, including names, addresses, emails, and phone numbers.",
            "Workflow Automation: Automate repetitive tasks, notifications, and processes to streamline sales and marketing operations.",
            "Security and Data Privacy: Ensure data security and compliance with regulations by implementing role-based access controls, encryption, and regular data backups.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Nellaiappan01',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nellaiappan-s-1036411a6/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
        link:"https://google.com"
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
        link:"https://google.com"
},
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
        link:"https://google.com"

    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
        link:"https://google.com"

    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
        link:"https://google.com"

    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
        link:"https://google.com"
    }
];