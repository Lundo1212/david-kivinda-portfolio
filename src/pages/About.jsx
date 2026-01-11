export default function About() {
  return (
    <div className="w-full bg-gradient-to-b from-emerald-400 to-teal-600 text-white">
      
      <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-yellow-300 text-center">
          About Me
        </h1>

        {/* Profile */}
        <section className="mb-10 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Profile
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            I am a passionate IT professional, developer, and problem solver with extensive experience in programming, cybersecurity, and data science. I have a keen eye for detail and enjoy building robust applications.
          </p>
        </section>

        {/* Technical Expertise */}
        <section className="mb-10 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Technical Expertise
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Programming (Python, JavaScript, React), Cybersecurity, Network Protection, Data Science (ML & Analytics), Software Development & Testing, Automation Scripts.
          </p>
        </section>

        {/* Professional Highlights */}
        <section className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Professional Highlights
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Junior Security Expert at Huawei, with practical experience in data protection, security analysis, and monitoring. Designed and implemented multiple testing applications for data analysis and security purposes.
          </p>
        </section>

      </div>
    </div>
  );
}
