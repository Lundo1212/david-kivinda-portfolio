export default function Media() {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-16">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 text-center">
          Media
        </h1>

        {/* Description */}
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Explore videos and media content showcasing my work, experiences,
          learning journey, and insights in technology, cybersecurity, and software development.
        </p>

        {/* ================= VIDEOS SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Video 1 */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="YouTube video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="YouTube video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}
