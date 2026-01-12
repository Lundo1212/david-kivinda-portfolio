import React from "react";

export default function Landing() {
  const text = `I am a passionate IT professional developer and problem solver with expertise in programming cybersecurity and data science I create innovative software solutions protect critical data and turn complex problems into practical impactful results Experienced at Huawei as a Junior Security Expert I thrive on learning exploring new technologies and building applications that make a difference Let’s explore technology programming and cybersecurity together`;

  // Split text into words
  const words = text.split(" ");

  // Build lines for right-angled triangle
  const lines = [];
  let index = 0;
  for (let i = 1; index < words.length; i++) {
    lines.push(words.slice(index, index + i).join(" "));
    index += i;
  }

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url("/profile.JPG")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black blur overlay on lower half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/40 backdrop-blur-sm z-0"></div>

      {/* Triangle text container */}
      <div className="absolute left-4 bottom-8 flex flex-col justify-end px-4 z-10">
        {lines.map((line, i) => (
          <div key={i} className="relative mb-1 w-max">
            {/* White, bold triangle text */}
            <span className="text-yellow font-extrabold text-base sm:text-lg md:text-xl leading-snug">
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
