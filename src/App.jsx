import React, { useState } from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Vision from "./pages/Vision";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Media from "./pages/Media";

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="scroll-smooth relative">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        {/* Left: Profile + Title */}
        <div className="flex items-center gap-4">
          <img
            src="/profile.JPG"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl md:text-2xl">
              DAVID KIVINDA PORTFOLIO
            </h1>
            <h2 className="text-yellow-400 uppercase text-sm md:text-lg tracking-wide">
              WELCOME TO MY PORTFOLIO
            </h2>
          </div>
        </div>

        {/* Right: Hamburger menu */}
        <div className="relative">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`absolute right-0 mt-2 w-56 bg-black/90 rounded-md shadow-lg flex flex-col p-4 gap-3 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <a href="#landing" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Landing</a>
            <a href="#home" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#education" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#vision" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Vision & Mission</a>
            <a href="#work" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#projects" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#media" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Media</a>
            <a href="/DavidKivinda_CV.pdf" download className="bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-300 text-center mt-2">Download CV</a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-28">

        {/* Landing Page */}
        <section id="landing" className="w-full h-screen">
          <Landing />
        </section>

        {/* Home Section */}
        <section id="home" className="w-full py-1">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-1">
          <About />
        </section>

        {/* Education */}
        <section id="education" className="w-full py-1">
          <Education />
        </section>

        {/* Vision */}
        <section id="vision" className="w-full py-1">
          <Vision />
        </section>

        {/* Work */}
        <section id="work" className="w-full py-1">
          <Work />
        </section>

        {/* Projects */}
        <section id="projects" className="w-full py-1">
          <Projects />
        </section>

        {/* Media */}
        <section id="media" className="w-full py-1">
          <Media />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-4">
        <div className="px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
          
          {/* Contact info */}
          <div className="flex flex-col gap-1 text-left">
            <p>
              WhatsApp: <span className="text-green-400 font-semibold">0797742966</span>
            </p>
            <p>
              Email: <span className="text-yellow-400 font-semibold">kivindadavid8@gmail.com</span>
            </p>
          </div>

          {/* Social & message */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
            <p className="text-sm md:text-base text-left">
              Connect with me through my social platforms where I share insights on technology, programming, cybersecurity, and personal growth.
            </p>
            <div className="flex gap-2 md:gap-4 text-3xl mt-1 md:mt-0">
              <a href="#" className="text-blue-600 hover:text-blue-500"><FaFacebookF /></a>
              <a href="#" className="text-pink-500 hover:text-pink-400"><FaInstagram /></a>
              <a href="#" className="text-blue-400 hover:text-blue-300"><FaTelegramPlane /></a>
              <a href="#" className="text-red-600 hover:text-red-500"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom slogan */}
        <div className="bg-gray-800 text-center py-2 text-lg italic font-semibold">
          "Every move is a fight to live"
        </div>
      </footer>
    </div>
  );
}
