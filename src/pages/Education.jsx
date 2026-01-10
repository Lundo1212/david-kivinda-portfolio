export default function Education() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white px-10">

      <h1 className="text-5xl font-extrabold mb-10 text-yellow-300">Education</h1>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Degrees</h2>
        <ul className="list-disc list-inside text-lg">
          <li>BSc Information Technology – JKUAT</li>
          <li>Science Foundation in Mathematics and Physics</li>
        </ul>
      </section>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Certifications & Skills</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Cybersecurity & Network Protection</li>
          <li>Data Science & Analytics</li>
          <li>Programming & Software Development</li>
        </ul>
      </section>

    </div>
  );
}
