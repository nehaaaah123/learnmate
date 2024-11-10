import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      title: "DSA Course",
      feedback:
        "The DSA course was an absolute game-changer for me! The structured approach and in-depth problem-solving techniques helped me improve my competitive programming skills. Highly recommend this course for anyone wanting to master algorithms and data structures.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdftMTz2woyGr0rwkw95l13jojCjgmCztYg&s",
      field: "DSA",
    },
    {
      name: "Alice Lee",
      title: "Web Development Course",
      feedback:
        "The Web Development course provided all the tools I needed to build responsive, dynamic websites. From HTML and CSS to React, everything was covered with clear explanations and practical projects that made the learning experience fun and hands-on.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqo-d8BYp3_n_4cfhUBMHFaqwS1vC8v4yhcg&s",
      field: "Web Development",
    },
    {
      name: "Emily Clark",
      title: "Web Development Course",
      feedback:
        "I took the backend section of the Web Development course, and it was fantastic! The lessons on Node.js and Express were detailed and easy to follow. It also helped me understand how to build APIs and work with databases, giving me real-world skills.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl-3s27sN3QHbWiuRzijVHVJRcZevBK56VQ&s",
      field: "Web Development",
    },
    {
      name: "Ravi Patel",
      title: "Python for Data Science",
      feedback:
        "The Python for Data Science course was perfect for learning data manipulation, visualization, and machine learning basics. The hands-on projects using Pandas and NumPy really helped solidify my understanding. It’s ideal for anyone transitioning into data science.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s",
      field: "Data Science",
    },
    {
      name: "Rajesh Kumar",
      title: "Mobile Developer - React Native Course",
      feedback:
        "I’ve been learning React Native, and this course made it easy to build mobile apps from scratch. The content was very practical, and I loved how we built an actual app throughout the course. Now, I feel confident in developing my own mobile apps.",
      image: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/ORP/B4034D5B-B9CD-0FDA-A4A4B94A79E709491-20160616043202649.jpg",
      field: "Mobile Development",
    },
    {
      name: "Nina Roy",
      title: "Full Stack Development Course",
      feedback:
        "The Full Stack Development course is comprehensive! I learned everything from front-end development to back-end frameworks. The instructors broke down complex topics into digestible sections, and the hands-on projects were incredibly valuable in reinforcing my learning.",
      image: "https://iexp.es/congreso/quinto-congreso/wp-content/uploads/2015/04/speaker-1-v2.jpg",
      field: "Full Stack Development",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Instructors",
      description:
        "Our instructors are industry professionals with years of experience, providing you with up-to-date knowledge and best practices.",
    },
    {
      title: "Hands-on Learning",
      description:
        "We emphasize practical learning with real-world projects, so you gain experience you can directly apply in your career.",
    },
    {
      title: "Flexible Learning",
      description:
        "Learn at your own pace with our flexible course schedules, designed to fit into your busy lifestyle while ensuring progress.",
    },
    {
      title: "Community Support",
      description:
        "Join a thriving community of learners, where you can collaborate, ask questions, and get feedback from peers and instructors.",
    },
    {
      title: "Career Guidance",
      description:
        "We provide career services, including resume reviews, interview preparation, and job placement assistance to help you land your dream job.",
    },
  ];

  return (
    <section className="bg-[#27272a] py-16">
        <div className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-8 text-white italic m-2">What Our Users Say</h2>
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-72 mb-8"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl text-black">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-semibold mb-8 text-white italic m-2">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-72 text-left"
            >
              <h3 className="font-bold text-xl mb-4 text-black ">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;