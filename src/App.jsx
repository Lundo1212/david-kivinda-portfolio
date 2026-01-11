import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import VisionMission from "./pages/VisionMission";
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
    <div className="w-full min-h-screen overflow-x-hidden scroll-smooth bg-black">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src="/profile.JPG"
              alt="David Kivinda"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white"
            />
            <div className="leading-tight">
              <h1 className="text-white font-bold text-sm md:text-lg">
                DAVID KIVINDA
              </h1>
              <p className="text-yellow-400 text-xs uppercase tracking-wide">
                Portfolio
              </p>
            </div>
          </div>

          {/* Menu Button */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-white">
            {["home","about","education","vision","work","projects","media"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-yellow-400 capitalize"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="/DavidKivinda_CV.pdf"
              download
              className="bg-yellow-400 text-black px-4 py-1 rounded font-semibold"
            >
              CV
            </a>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 px-6 py-6 space-y-4">
            {["home","about","education","vision","work","projects","media"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white text-lg hover:text-yellow-400 capitalize"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="/DavidKivinda_CV.pdf"
              download
              className="block bg-yellow-400 text-black text-center py-2 rounded font-semibold"
            >
              Download CV
            </a>
          </div>
        )}
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-24 space-y-24">

        <section id="home" className="min-h-screen flex items-center">
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-emerald-400 to-teal-600"
        >
          <About />
        </section>

        <section
          id="education"
          className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-blue-400 to-indigo-600"
        >
          <Education />
        </section>

        <section
          id="vision"
          className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-purple-500 to-pink-600"
        >
          <VisionMission />
        </section>

        <section
          id="work"
          className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-amber-400 to-orange-600"
        >
          <Work />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-sky-400 to-blue-600"
        >
          <Projects />
        </section>

        <section id="media" className="px-4">
          <Media />
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
          
          <div className="space-y-2">
            <p>
              WhatsApp:{" "}
              <span className="text-green-400 font-semibold">
                0797742966
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="text-yellow-400 font-semibold">
                kivindadavid8@gmail.com
              </span>
            </p>
          </div>

          <div className="flex gap-6 text-2xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTelegramPlane className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        <div className="bg-gray-800 text-center py-4 italic">
          “Every move is a fight to live”
        </div>
      </footer>
    </div>
  );
}
