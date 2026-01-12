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
    // Set interval for 5 seconds per slide
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden relative">

      {/* Slides Wrapper */}
      <div
        className="flex min-h-screen transition-transform duration-[2000ms] ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full min-h-screen flex-shrink-0 relative overflow-hidden"
          >
            {/* Image with fade + zoom */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-[2000ms] ease-in-out
                ${currentSlide === index ? "scale-105 opacity-100" : "scale-100 opacity-0"}
              `}
            />

            {/* Text Overlay with fade + slide-up */}
            <div
              className={`absolute bottom-0 w-full bg-black/70 text-white px-4 py-6
                text-sm sm:text-base md:text-xl font-semibold text-center
                transition-all duration-[2000ms] ease-in-out
                ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {slide.text}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
