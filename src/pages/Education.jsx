export default function Education() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-400 to-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center space-y-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-300 text-center">Education</h1>

        <section className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Degrees</h2>
          <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
            <li>BSc Information Technology – JKUAT</li>
            <li>Science Foundation in Mathematics and Physics</li>
          </ul>
        </section>

        <section className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Certifications & Skills</h2>
          <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
            <li>Cybersecurity & Network Protection</li>
            <li>Data Science & Analytics</li>
            <li>Programming & Software Development</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
