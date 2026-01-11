import React, { useEffect, useState } from "react";

export default function Home() {
  const slides = [
    {
      img: "/me1.JPG",
      text: "I am driven by a profound passion for programming, data science, and software development, transforming complex ideas into innovative, impactful, and practical solutions."
    },
    {
      img: "/me2.JPG",
      text: "During my tenure at Huawei as a Junior Security Expert, I safeguarded critical data, employing advanced cybersecurity strategies to ensure optimal protection and operational integrity."
    },
    {
      img: "/me3.JPG",
      text: "As a dedicated science student at JKUAT, I continuously explore, develop, and rigorously test applications, integrating theoretical knowledge with practical execution for efficient technological solutions."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000); // 9 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <div className="relative w-full max-w-7xl mx-auto px-4 py-20">

        {/* Slides container */}
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">

              {/* Image */}
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto md:h-[80vh] object-cover rounded-md shadow-lg"
              />

              {/* Text overlay */}
              <div className="absolute bottom-0 w-full bg-black/60 text-white py-6 px-4 text-center text-base md:text-lg font-semibold rounded-b-md">
                {slide.text}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
