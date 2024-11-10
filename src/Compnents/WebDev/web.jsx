import React from "react";
import WebCard from './WebCard'; // Make sure you import WebCard correctly
import './web.css';

import c1 from "../c1.jpg";
import c2 from "../c2.png";
import c3 from "../c3.png";
import c4 from "../c4.png";

const web = [
  { 
    image: c1, 
    title: "React Course", 
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=IND21PM", 
    about: 'React - The Complete Guide (incl. Redux) is an all-in-one course for mastering React.', 
    review: "Rated 3.5 stars by 50k+ students.",
    level: "Advanced"
  },
  { 
    image: c2, 
    title: "Node Course",
    link: 'https://www.udemy.com/course/nodejs-the-complete-guide/?couponCode=IND21PM',
    about: "NodeJS - The Complete Guide is a comprehensive course for learning Node.js.",
    review: "Rated 4 stars by 70k+ students.",
    level: "Beginner"
  },
  { 
    image: c3, 
    title: "MERN Stack Course",
    link: 'https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs',
    about: "MERN Stack Course - MongoDB, Express, React, and NodeJS.",
    review: "Rated 4.5 stars by 30k+ students.",
    level: "Moderate"
  },
  { 
    image: c4, 
    title: "Web Development Bootcamp",
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=IND21PM',
    about: "The Complete Web Development Bootcamp is a beginner-friendly course.",
    review: "Rated 2.5 stars by 5k+ students.",
    level: "Advanced"
  }
];

export default function Web() {
  return (
    <div className="web-container">
      {Array.isArray(web) && web.map((course, index) => (
        <WebCard
          key={index}
          image={course.image}
          title={course.title}
          about={course.about}
          link={course.link}
          level={course.level}  // Pass the level prop
          review={course.review}  // Pass the review prop
        />
      ))}
    </div>
  );
}
