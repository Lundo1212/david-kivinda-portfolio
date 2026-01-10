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
    <div className="w-full h-screen overflow-hidden relative">
      {/* Slides container */}
      <div
        className="flex h-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 w-full bg-black/60 text-white py-6 px-4 text-center text-lg md:text-xl font-semibold">
              {slide.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
