export default function Work() {
  return (
    <div className="w-full bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-14">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 text-center">
          Work Experience
        </h1>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Huawei</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Junior Security Expert – specialized in data protection, network monitoring, and implementing cybersecurity initiatives for corporate systems.
          </p>
        </section>

        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Freelance Projects</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Developed automation scripts, small applications, and data dashboards. Performed security testing and vulnerability assessments on software systems.
          </p>
        </section>

      </div>
    </div>
  );
}
