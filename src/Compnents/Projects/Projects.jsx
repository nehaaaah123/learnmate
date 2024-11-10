import React from "react";
import './Projects.css';
import ProjectCard from './ProjectCard';
import w1 from "../web.png.jpg";
import w2 from "../dsa.png.jpg";
import w3 from "../app.png.jpg";
import w4 from "../block.png.jpg";
import w5 from "../cloud.png.jpg";
import w6 from "../devops.png.jpg";
import w7 from "../system.png.jpg";
import w8 from "../cyber.png.jpg";
import w9 from "../ai.png.jpg";
import w10 from "../ds.png.jpg";

const projects = [
    { image: w1, title: "WEB DEV", link: '/web' },
    { image: w2, title: "DSA",link: '/dsa' },
    { image: w3, title: "APP DEV",link: '/app' },
    { image: w4, title: "BLOCKCHAIN",link: '/block' },
    { image: w5, title: "CLOUD COMPUTING",link: '/cloud' },
    { image: w6, title: "DEVOPS" ,link: '/dev'},
    { image: w7, title: "SYSTEM DESIGN",link: '/syst' },
    { image: w8, title: "CYBER SECURITY" ,link: '/cyb'},
    { image: w9, title: "AI" ,link: '/ai'},
    { image: w10, title: "DATA SCIENCE" ,link: '/data'}
];

export default function Project() {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    link={project.link}
                    githubLink={project.githubLink}
                />
            )
        )
    }
        </div>
    );
} 