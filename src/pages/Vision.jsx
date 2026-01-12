export default function Vision() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Vision & Mission
        </h1>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-400">
            Vision
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            To become a globally impactful technologist, designing intelligent,
            secure, and scalable digital systems that bridge scientific rigor
            with innovative software engineering to advance society.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-400">
            Mission
          </h2>
          <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg space-y-3 text-gray-300">
            <li>Continuously expand expertise in software development, cybersecurity, and data science</li>
            <li>Engineer secure systems that protect data integrity and user trust</li>
            <li>Apply scientific discipline and ethical responsibility in all technological work</li>
            <li>Innovate relentlessly while maintaining technical excellence</li>
            <li>Transform complex challenges into elegant, functional digital solutions</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
