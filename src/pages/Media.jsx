import React from "react";

export default function Media() {
  const videos = [
    { title: "ROBOTICTS IN SCIENCE", url: "/videos/ROBOTICS IN SCIENCE.mp4" },
    { title: "ARDUINO BASED DOOR SYSTEM", url: "/videos/ARDUINO BASED DOOR SYSTEM.mp4" },
  ];

  const testimonials = [
    { name: "EZRA ", text: "David’s work is outstanding, delivering projects on time and with excellence." },
    { name: "PROF JANE ", text: "His expertise in data science and cybersecurity is exceptional. Highly recommended!" },
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-700 to-gray-900 text-white flex flex-col items-center py-12 px-4">
      <h2 className="text-5xl font-bold mb-10">VIDEOS</h2>

      {/* Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mb-12">
        {videos.map((video, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <video
              src={video.url}
              controls
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-2 font-semibold text-lg">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-800/70 p-6 rounded-lg shadow-md text-center"
          >
            <p className="text-lg italic">"{t.text}"</p>
            <p className="mt-2 font-bold text-yellow-400">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
