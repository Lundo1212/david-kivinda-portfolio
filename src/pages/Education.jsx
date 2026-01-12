export default function Education() {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-14">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 text-center">
          Education
        </h1>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Degrees</h2>
          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg space-y-2">
            <li>BSc Information Technology – JKUAT</li>
            <li>Science Foundation in Mathematics and Physics</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Certifications & Skills</h2>
          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg space-y-2">
            <li>Cybersecurity & Network Protection</li>
            <li>Data Science & Analytics</li>
            <li>Programming & Software Development</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
