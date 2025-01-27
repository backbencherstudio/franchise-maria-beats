import React, { useState } from "react";
import TestmonialImage from "../assets/testimonail-bg.png";
import Avater from "../assets/Avatar.png";
import StartsImage from "../assets/stars.png";

const testimonials = [
  {
    id: 1,
    name: "Steve Man",
    role: "CEO - Global Catering",
    feedback:
      "Gulf Franchise was a key asset. We feel that working with Gulf Franchise has taken us to the next level.",
  },
  {
    id: 2,
    name: "Steve Man",
    role: "Co-Founder - Kcal",
    feedback:
      "Gulf Franchise was a key asset. We feel that working with Gulf Franchise has taken us to the next level.",
  },
  {
    id: 3,
    name: "Steve Man",
    role: "Co-Founder - Under500",
    feedback:
      "Gulf Franchise was a key asset. We feel that working with Gulf Franchise has taken us to the next level.",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="relative bg-gray-50 py-32 px-4 sm:px-6 lg:px-20 "
      style={{
        background: `url(${TestmonialImage})`,
      }}
    >
      <div className=" max-w-[1300px] mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center md:text-start px-4">
          <p className=" text-black text-xl">-- Feature Opportunities</p>
          <h2 className="text-3xl sm:text-4xl font-bold my-4">
            We Are Very Glad To Get Client Review
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Our clients praise us for our great results, personable service,
            expert knowledge, and on- <br className="hidden sm:block" /> time
            delivery. Here are just a few of them:
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-full sm:w-auto max-w-md cursor-pointer transition-transform duration-300 ${
                activeIndex === index
                  ? "border-red-500 shadow-xl scale-105 bg-red-50"
                  : "border-gray-200"
              } border p-6 shadow-lg rounded-2xl`}
              onClick={() => setActiveIndex(index)}
            >
              <div>
                <img src={StartsImage} alt="stars" className="mb-4" />
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={Avater}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-colors duration-300 border-2 ${
                activeIndex === index
                  ? "bg-red-500 border-red-500"
                  : "bg-gray-200 border-gray-100"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
