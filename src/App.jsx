import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import VisionMission from "./pages/VisionMission";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Media from "./pages/Media";

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="scroll-smooth relative">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/profile.JPG" alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-white"/>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl md:text-2xl">DAVID KIVINDA PORTFOLIO</h1>
            <h2 className="text-yellow-400 uppercase text-sm md:text-lg tracking-wide">WELCOME TO MY PORTFOLIO</h2>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="relative">
          <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`absolute right-0 mt-2 w-56 bg-black/90 rounded-md shadow-lg flex flex-col p-4 gap-3 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
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
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="vision"><VisionMission /></section>
        <section id="work"><Work /></section>
        <section id="projects"><Projects /></section>
        <section id="media"><Media /></section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <p>WhatsApp: <span className="text-green-400 font-semibold">0797742966</span></p>
            <p>Email: <span className="text-yellow-400 font-semibold">kivindadavid8@gmail.com</span></p>
          </div>

          <div className="flex gap-6 text-3xl mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTelegramPlane /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>

        <div className="bg-gray-800 text-center py-6 text-lg italic font-semibold">
          "Every move is a fight to live"
        </div>
      </footer>
    </div>
  );
}
