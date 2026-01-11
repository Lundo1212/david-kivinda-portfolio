export default function Projects() {
  return (
    <div className="w-full bg-gradient-to-b from-sky-400 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center space-y-12">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-yellow-300 text-center">
          Projects
        </h1>

        <ul className="list-disc list-inside text-base md:text-lg leading-relaxed max-w-3xl space-y-4 text-center">
          <li>Automated Testing Tools for web & desktop applications.</li>
          <li>Data Analysis Dashboards using Python and Excel.</li>
          <li>Cybersecurity scripts for monitoring and protection.</li>
          <li>React-based personal portfolio website.</li>
          <li>Machine Learning predictive models experiments.</li>
          <li>Small-scale network security projects and monitoring tools.</li>
        </ul>

      </div>
    </div>
  );
}
