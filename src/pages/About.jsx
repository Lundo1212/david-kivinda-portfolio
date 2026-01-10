export default function About() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white px-10">

      <h1 className="text-5xl font-extrabold mb-10 text-yellow-300">About Me</h1>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Profile</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate IT professional, developer, and problem solver with extensive experience in programming, cybersecurity, and data science. I have a keen eye for detail and enjoy building robust applications.
        </p>
      </section>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Technical Expertise</h2>
        <p className="text-lg leading-relaxed">
          Programming (Python, JavaScript, React), Cybersecurity, Network Protection, Data Science (ML & Analytics), Software Development & Testing, Automation Scripts.
        </p>
      </section>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Professional Highlights</h2>
        <p className="text-lg leading-relaxed">
          Junior Security Expert at Huawei, with practical experience in data protection, security analysis, and monitoring. Designed and implemented multiple testing applications for data analysis and security purposes.
        </p>
      </section>

    </div>
  );
}
