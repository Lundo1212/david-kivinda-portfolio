import { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaCheck,
  FaMobileAlt,
  FaRegLightbulb,
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
      "From a clear, professional landing page to a multi-section business site, create a useful first impression on every screen.",
    tags: ["Business websites", "React", "Mobile-first design"],
  },
  {
    number: "02",
    icon: <FaCode aria-hidden="true" />,
    title: "Software & automation",
    description:
      "Purposeful applications, data dashboards, and automation that help make repetitive work simpler and information easier to use.",
    tags: ["Python", "Data dashboards", "Testing"],
  },
  {
    number: "03",
    icon: <FaLock aria-hidden="true" />,
    title: "IT & security",
    description:
      "IT support and security-conscious development informed by hands-on experience with data protection and network monitoring.",
    tags: ["Cybersecurity", "Data protection", "Networking"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "We start with your business, customers, goals, and the problem to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Agree on the essentials, page structure, and the right approach before building.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop a responsive solution with clear communication as the work takes shape.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Review the details together and polish the result for launch.",
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
              I&apos;m David Kivinda, an IT professional and web developer helping
              businesses establish a confident online presence with thoughtful,
              responsive websites and practical technology.
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
              <span>IT professional · Web developer · JKUAT</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img src="/profile.JPG" alt="David Kivinda" />
              <div className="photo-label">
                <span className="label-kicker">IT · WEB · PROBLEM SOLVING</span>
                <span className="label-title">Ideas into impact<span>.</span></span>
              </div>
            </div>
            <div className="visual-note">
              <span className="note-symbol">&lt;/&gt;</span>
              <span>Thoughtful by design.<br />Useful by nature.</span>
            </div>
            <span className="visual-index">01 — 04</span>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span /></div>
        </section>

        <section className="intro section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">ABOUT DAVID <span>— 01</span></p>
            <h2 id="about-title">Good technology should make life <span>and business easier.</span></h2>
          </div>
          <div className="intro-content">
            <p>
              I&apos;m an IT professional and web developer with an engineering
              mindset and a genuine interest in how technology can help people
              move forward. I enjoy taking a real need, making sense of the
              technical details, and shaping them into a solution that feels
              clear, dependable, and easy to use.
            </p>
            <p>
              My interests span web development, software, data, and
              cybersecurity. That breadth helps me think beyond the code: about
              the people using a product, the information it handles, and the
              business goals it should support.
            </p>
            <a className="text-link" href={emailLink}>
              Let&apos;s talk about what you need <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="experience section-wrap" aria-labelledby="experience-title">
          <div className="experience-icon"><FaLock aria-hidden="true" /></div>
          <div className="experience-copy">
            <p className="eyebrow">PROFESSIONAL EXPERIENCE <span>— 02</span></p>
            <h2 id="experience-title">A security-minded approach to technology.</h2>
            <p className="experience-role">Junior Security Expert <span>·</span> Huawei</p>
            <p className="experience-description">
              Experience focused on data protection, security analysis, and
              monitoring. That foundation informs how I approach every
              technology challenge: carefully, responsibly, and with attention
              to the details that keep systems and information safer.
            </p>
          </div>
          <span className="experience-stamp">SECURITY<br />MINDED</span>
        </section>

        <section className="services section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">WHAT I BRING <span>— 03</span></p>
              <h2 id="skills-title">Practical skills. <span>Purposeful work.</span></h2>
            </div>
            <p className="heading-aside">
              From your first business website to a more efficient workflow,
              thoughtful technology starts with the right problem.
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
              {skills.map((skill) => <span key={skill}><FaCheck aria-hidden="true" />{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="process section-wrap" aria-labelledby="process-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">HOW WE WORK <span>— 04</span></p>
              <h2 id="process-title">Clear steps. <span>No guesswork.</span></h2>
            </div>
            <p className="heading-aside">
              A straightforward, collaborative process keeps your priorities
              at the center from the first conversation to the final details.
            </p>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="project-ideas">
            <span className="project-ideas-icon"><FaRegLightbulb aria-hidden="true" /></span>
            <p><strong>Not sure where to start?</strong> We can talk through what your business needs, whether that&apos;s a simple website, a stronger online presence, or a small tool to make work easier.</p>
            <a className="text-link" href={projectEmailLink}>Tell me your idea <FaArrowRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="education section-wrap" id="education" aria-labelledby="education-title">
          <div className="education-icon"><FaGraduationCap aria-hidden="true" /></div>
          <div className="education-copy">
            <p className="eyebrow">EDUCATION <span>— 05</span></p>
            <h2 id="education-title">Built on engineering fundamentals.</h2>
            <p className="degree">BSc in Computer Engineering</p>
            <p className="school">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
          </div>
          <span className="education-mark">JKUAT</span>
        </section>

        <section className="principles section-wrap" aria-label="What you can expect">
          <div className="principle">
            <FaMobileAlt aria-hidden="true" />
            <div><h3>Made for every screen</h3><p>Responsive layouts that work comfortably on phones, tablets, and desktops.</p></div>
          </div>
          <div className="principle">
            <FaRegLightbulb aria-hidden="true" />
            <div><h3>Built around your goals</h3><p>Clear content and useful features shaped around what your business needs.</p></div>
          </div>
          <div className="principle">
            <FaLock aria-hidden="true" />
            <div><h3>Thoughtful and dependable</h3><p>Careful attention to usability, detail, and responsible handling of technology.</p></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">YOUR NEXT STEP <span>— 06</span></p>
            <h2 id="contact-title">Let&apos;s take your business <span>online.</span></h2>
            <p>
              Tell me a little about your business, your idea, or the challenge
              you&apos;re trying to solve. I&apos;ll get back to you so we can
              explore the next step together.
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
