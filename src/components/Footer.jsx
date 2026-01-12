import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-12">

        {/* Description */}
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          Connect with me through my social platforms where I share insights on
          technology, programming, cybersecurity, and personal growth.
        </p>

        {/* Social Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <FaFacebookF className="text-3xl text-blue-500" />
            <p className="text-sm font-semibold">Facebook</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaInstagram className="text-3xl text-pink-500" />
            <p className="text-sm font-semibold">Instagram</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaTelegramPlane className="text-3xl text-blue-400" />
            <p className="text-sm font-semibold">Telegram</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaYoutube className="text-3xl text-red-600" />
            <p className="text-sm font-semibold">YouTube</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
          <p>
            WhatsApp:{" "}
            <span className="text-green-400 font-semibold">
              0797742966
            </span>
          </p>

          <p>
            Email:{" "}
            <span className="text-yellow-400 font-semibold">
              kivindadavid8@gmail.com
            </span>
          </p>
        </div>

        {/* Slogan */}
        <div className="text-center text-lg italic font-semibold text-gray-300">
          "Every move is a fight to live"
        </div>

      </div>
    </footer>
  );
}
