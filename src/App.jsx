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
    <div className="w-full min-h-screen overflow-x-hidden bg-black text-white scroll-smooth">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src="/profile.JPG"
              alt="David Kivinda"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h1 className="font-bold text-sm md:text-lg">
                DAVID KIVINDA
              </h1>
              <p className="text-yellow-400 text-xs uppercase">
                Portfolio
              </p>
            </div>
          </div>

          {/* Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {["home","about","education","vision","work","projects","media"].map(
              item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-yellow-400 capitalize"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black px-6 py-6 space-y-4">
            {["home","about","education","vision","work","projects","media"].map(
              item => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg hover:text-yellow-400 capitalize"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </header>

      {/* ================= MAIN ================= */}
      <main className="pt-24 space-y-32">

        {/* HOME */}
        <section id="home" className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <Home />
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="min-h-screen bg-gradient-to-b from-emerald-400 to-teal-600 text-black"
        >
          <div className="max-w-5xl mx-auto px-4 py-20">
            <About />
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600"
        >
          <div className="max-w-5xl mx-auto px-4 py-20">
            <Education />
          </div>
        </section>

        {/* VISION */}
        <section
          id="vision"
          className="min-h-screen bg-gradient-to-b from-purple-500 to-pink-600"
        >
          <div className="max-w-5xl mx-auto px-4 py-20">
            <VisionMission />
          </div>
        </section>

        {/* WORK */}
        <section
          id="work"
          className="min-h-screen bg-gradient-to-b from-amber-400 to-orange-600 text-black"
        >
          <div className="max-w-5xl mx-auto px-4 py-20">
            <Work />
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-600"
        >
          <div className="max-w-5xl mx-auto px-4 py-20">
            <Projects />
          </div>
        </section>

        {/* MEDIA */}
        <section id="media" className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <Media />
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p>WhatsApp: <span className="text-green-400">0797742966</span></p>
            <p>Email: <span className="text-yellow-400">kivindadavid8@gmail.com</span></p>
          </div>

          {/* Quote */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-3">Philosophy</h3>
            <p className="italic">“Every move is a fight to live”</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Me</h3>
            <div className="flex gap-4 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaTelegramPlane />
              <FaYoutube />
            </div>
          </div>

        </div>

        <div className="bg-gray-800 text-center py-4 text-sm">
          © {new Date().getFullYear()} David Kivinda. All rights reserved.
        </div>

      </footer>
    </div>
  );
}
