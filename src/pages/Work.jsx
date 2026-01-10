export default function Work() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white px-10">

      <h1 className="text-5xl font-extrabold mb-10 text-yellow-300">Work Experience</h1>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Huawei</h2>
        <p className="text-lg leading-relaxed">
          Junior Security Expert – specialized in data protection, network monitoring, and implementing cybersecurity initiatives for corporate systems.
        </p>
      </section>

      <section className="mb-8 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Freelance Projects</h2>
        <p className="text-lg leading-relaxed">
          Developed automation scripts, small applications, and data dashboards. Performed security testing and vulnerability assessments on software systems.
        </p>
      </section>

    </div>
  );
}
