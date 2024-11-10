import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Software Engineer",
      feedback: "This platform has transformed the way I learn. The personalized learning paths are a game-changer!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      feedback: "The real-world projects and mentorship helped me land my dream job. Highly recommend it!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Emily Johnson",
      title: "Marketing Specialist",
      feedback: "I love how interactive and engaging the learning experience is. It's both fun and informative.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-72">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;