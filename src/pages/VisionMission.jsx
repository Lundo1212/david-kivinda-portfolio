export default function VisionMission() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-white px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col space-y-16">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Vision & Mission
        </h1>

        {/* Vision Section */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Vision
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mx-auto max-w-3xl">
            To become a globally impactful technologist, designing intelligent,
            secure, and scalable digital systems that bridge scientific rigor
            with innovative software engineering to advance society.
          </p>
        </section>

        {/* Mission Section */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-4">
            Mission
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-300 mx-auto max-w-3xl space-y-3 leading-relaxed">
            <li>Continuously expand expertise in software development, cybersecurity, and data science.</li>
            <li>Engineer secure systems that protect data integrity and user trust.</li>
            <li>Apply scientific discipline and ethical responsibility in all technological work.</li>
            <li>Innovate relentlessly while maintaining technical excellence.</li>
            <li>Transform complex challenges into elegant, functional digital solutions.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
