import React, { useEffect, useState } from "react";

export default function Home() {
  const slides = [
    { img: "/me1.JPG", text: "I am driven by a profound passion for programming, data science, and software development." },
    { img: "/me2.JPG", text: "During my tenure at Huawei as a Junior Security Expert, I safeguarded critical data." },
    { img: "/me3.JPG", text: "As a dedicated science student at JKUAT, I continuously develop and test applications." },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full flex-shrink-0 relative">
              <img src={slide.img} alt={`Slide ${idx+1}`} className="w-full md:h-[80vh] object-cover rounded-md shadow-lg"/>
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
