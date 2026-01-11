export default function Work() {
  return (
    <div className="w-full bg-gradient-to-b from-amber-400 to-orange-600 text-black">
      <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center space-y-12">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-300 text-center">
          Work Experience
        </h1>

        {/* Huawei */}
        <section className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Huawei
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Junior Security Expert – specialized in data protection, network monitoring, and implementing cybersecurity initiatives for corporate systems.
          </p>
        </section>

        {/* Freelance Projects */}
        <section className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Freelance Projects
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Developed automation scripts, small applications, and data dashboards. Performed security testing and vulnerability assessments on software systems.
          </p>
        </section>

      </div>
    </div>
  );
}
