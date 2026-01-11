export default function Media() {
  return (
    <div className="w-full bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center space-y-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Media</h1>

        <section className="max-w-3xl text-center">
          <p className="text-base md:text-lg leading-relaxed">
            Explore photos, videos, and media content showcasing my work, projects, and professional journey.
          </p>
        </section>

        <section className="max-w-3xl text-center">
          <p className="text-base md:text-lg leading-relaxed">
            Highlights include project demos, cybersecurity tools, data dashboards, and portfolio snapshots.
          </p>
        </section>
      </div>
    </div>
  );
}
