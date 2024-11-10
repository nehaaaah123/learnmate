import React from "react";
import WebCard from './WebCard'; // Make sure you import WebCard correctly
import './web.css';

import c1 from "../c1.jpg";
import c2 from "../c2.png";
import c3 from "../c3.png";
import c4 from "../c4.png";

const web = [
  { image: c1, title: "React Course", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=IND21PM" , about:'React - The Complete Guide (incl. Redux)" is an all-in-one course for mastering React, from basics to advanced topics like Redux and hooks. It offers hands-on projects and covers essential skills for building dynamic, high-performance web applications with React.'},
  { image: c2, title: "Node Course" ,link:'https://www.udemy.com/course/nodejs-the-complete-guide/?couponCode=IND21PM',about:"NodeJS - The Complete Guide is a comprehensive course for learning Node.js from scratch, covering essential topics like Express, MongoDB, and RESTful APIs. This course guides students through building full-featured server-side applications, enhancing skills in backend development, and managing databases effectively."},
  { image: c3, title: "MERN Stack Course",link:'https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs',about:"MERN Stack Course - MongoDB, Express, React, and NodeJS provides a complete guide to building full-stack applications using the MERN stack. This course covers everything from setting up MongoDB, building APIs with Express and Node.js, to creating interactive UIs with React, giving learners hands-on experience in developing end-to-end web applications." },
  { image: c4, title: " Web Development Bootcamp",link:'https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=IND21PM',about:"The Complete Web Development Bootcamp is a beginner-friendly, all-in-one course covering HTML, CSS, JavaScript, Node.js, React, and more. Ideal for those looking to start a career in web development, this course teaches both front-end and back-end skills, helping learners build and deploy fully functional websites and applications." }
];

export default function Web() {
  return (
    <div className="web-container">
      {Array.isArray(web) && web.map((web, index) => (
        <WebCard
          key={index}
          image={web.image}
          title={web.title}
          about={web.about}
          link={web.link}
        />
      ))}
    </div>
  );
}
