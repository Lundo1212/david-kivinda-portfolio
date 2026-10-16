import { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaLock,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import "./App.css";

const email = "kivindadavid8@gmail.com";
const projectMessage = encodeURIComponent(
  "Hi David, I'd like to talk about bringing my business online."
);
const emailLink = `mailto:${email}?subject=Let's%20build%20something%20great`;
const projectEmailLink = `mailto:${email}?subject=Bring%20my%20business%20online&body=${projectMessage}`;

const skills = [
  "Web development",
  "React",
  "JavaScript",
  "HTML & CSS",
  "Responsive design",
  "Python",
  "Cybersecurity",
  "Data analysis",
];

const services = [
  {
    number: "01",
    icon: <FaLaptopCode aria-hidden="true" />,
    title: "Web development",
    description:
      "Modern, responsive websites that help businesses show up online and make a strong first impression.",
    tags: ["React", "JavaScript", "Responsive UI"],
  },
  {
    number: "02",
    icon: <FaCode aria-hidden="true" />,
    title: "Software & automation",
    description:
      "Practical software and lightweight automation built to streamline everyday work and solve real problems.",
    tags: ["Python", "Application development", "Testing"],
  },
  {
    number: "03",
    icon: <FaLock aria-hidden="true" />,
    title: "IT & security",
    description:
      "A security-minded approach to technology, from protecting information to understanding networks and systems.",
    tags: ["Cybersecurity", "Data protection", "Networking"],
  },
];

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="David Kivinda, home">
          <span className="brand-mark">DK<span>.</span></span>
          <span className="brand-name">DAVID KIVINDA<span>IT & WEB DEVELOPMENT</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href={projectEmailLink} onClick={closeMenu}>
            Let&apos;s talk <FaArrowRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> OPEN TO WEB PROJECTS</p>
            <h1 id="hero-title">
              Technology that works.
              <span>Websites that move</span>
              <span className="accent-line">business forward.</span>
            </h1>
            <p className="hero-description">
              I&apos;m David Kivinda, an IT professional and web developer creating
              thoughtful digital experiences and practical technology solutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={projectEmailLink}>
                Bring your business online <FaArrowRight aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#skills">
                Explore my skills <FaArrowDown aria-hidden="true" />
              </a>
            </div>
            <div className="hero-meta">
              <span><FaMapMarkerAlt aria-hidden="true" /> Kenya</span>
              <span className="meta-divider" aria-hidden="true" />
              <span>IT professional · Web developer</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img src="/profile.JPG" alt="David Kivinda" />
              <div className="photo-label">
                <span className="label-kicker">ENGINEERING THE NEXT</span>
                <span className="label-title">Ideas into impact<span>.</span></span>
              </div>
            </div>
            <div className="visual-note">
              <span className="note-symbol">&lt;/&gt;</span>
              <span>Built with curiosity.<br />Driven by purpose.</span>
            </div>
            <span className="visual-index">01 — 04</span>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span /></div>
        </section>

        <section className="intro section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME <span>— 01</span></p>
            <h2 id="about-title">I turn technology into <span>useful experiences.</span></h2>
          </div>
          <div className="intro-content">
            <p>
              I&apos;m a technology professional with a passion for building on the
              web. I bring together software development, IT, and a security-first
              mindset to create digital solutions that are useful, clear, and
              ready to grow with the people who use them.
            </p>
            <a className="text-link" href={emailLink}>
              Have a project in mind? <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="services section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">WHAT I BRING <span>— 02</span></p>
              <h2 id="skills-title">Skills for the <span>real world.</span></h2>
            </div>
            <p className="heading-aside">
              A versatile technical toolkit, focused on turning business needs into
              dependable digital solutions.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-topline">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="skill-strip">
            <span className="strip-title">TECH I WORK WITH</span>
            <div className="skill-list">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="education section-wrap" id="education" aria-labelledby="education-title">
          <div className="education-icon"><FaGraduationCap aria-hidden="true" /></div>
          <div className="education-copy">
            <p className="eyebrow">EDUCATION <span>— 03</span></p>
            <h2 id="education-title">Built on engineering fundamentals.</h2>
            <p className="degree">BSc in Computer Engineering</p>
            <p className="school">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
          </div>
          <span className="education-mark">JKUAT</span>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">YOUR NEXT STEP <span>— 04</span></p>
            <h2 id="contact-title">Let&apos;s take your business <span>online.</span></h2>
            <p>
              Need a professional website or a smarter digital solution? Tell me
              what you&apos;re building and let&apos;s make it happen.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={projectEmailLink}>
              <FaEnvelope aria-hidden="true" /> Email me about your project
            </a>
            <a
              className="contact-email"
              href={`mailto:${email}`}
              aria-label={`Send an email to ${email}`}
            >
              {email}
            </a>
            <a
              className="whatsapp-link"
              href="https://wa.me/254797742966"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Message me on WhatsApp
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">DK<span>.</span></a>
        <p>Thoughtful technology. Practical impact.</p>
        <a href={`mailto:${email}`}>{email}</a>
        <span className="copyright">© {new Date().getFullYear()} David Kivinda</span>
      </footer>
    </div>
  );
}
