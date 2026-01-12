export default function About() {
  return (
    <div className="w-full bg-gradient-to-b from-emerald-400 to-teal-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-14">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 text-center">
          About Me
        </h1>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Profile</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I am a passionate IT professional, developer, and problem solver with extensive experience in programming, cybersecurity, and data science. I have a keen eye for detail and enjoy building robust applications.
          </p>
        </section>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Technical Expertise</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Programming (Python, JavaScript, React), Cybersecurity, Network Protection, Data Science (ML & Analytics), Software Development & Testing, Automation Scripts.
          </p>
        </section>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Professional Highlights</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Junior Security Expert at Huawei, with practical experience in data protection, security analysis, and monitoring. Designed and implemented multiple testing applications for data analysis and security purposes.
          </p>
        </section>

      </div>
    </div>
  );
}
