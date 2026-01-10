export default function Vision() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-10 py-20">
      
      <h1 className="text-5xl font-bold mb-8">Vision & Mission</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Vision</h2>
        <p className="text-lg leading-relaxed text-gray-300 max-w-4xl">
          To become a globally impactful technologist, designing intelligent,
          secure, and scalable digital systems that bridge scientific rigor
          with innovative software engineering to advance society.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-emerald-400 mb-4">Mission</h2>
        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-300 max-w-4xl">
          <li>Continuously expand expertise in software development, cybersecurity, and data science</li>
          <li>Engineer secure systems that protect data integrity and user trust</li>
          <li>Apply scientific discipline and ethical responsibility in all technological work</li>
          <li>Innovate relentlessly while maintaining technical excellence</li>
          <li>Transform complex challenges into elegant, functional digital solutions</li>
        </ul>
      </section>

    </div>
  );
}
