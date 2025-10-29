import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-cyan-300 hover:text-cyan-100 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col items-center text-center mb-8">
            {/* Picture of the tour guy */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 p-1 shadow-2xl mb-6">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-300 text-sm md:text-base text-center px-4">
                  Picture of the tour guy
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-8 py-16 -mt-8">
        {/* Orange Pill App Ambassador button */}
        <div className="mb-8">
          <button className="w-full py-5 px-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-center font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02]">
            Orange Pill App Ambassador page
          </button>
        </div>

        {/* Links section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side - YouTube links */}
          <div className="space-y-4">
            <a
              href="https://www.youtube.com/watch?v=JY4b8doOz1c"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl text-center font-semibold shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] card-hover"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Link to that youtube video
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=GsDL15Uc4V4"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl text-center font-semibold shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] card-hover"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Link to that youtube video
              </div>
            </a>
          </div>

          {/* Right side - LUMA and Podcast */}
          <div className="space-y-4">
            <a
              href="https://luma.com/user/dion"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-center font-semibold shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-[1.02] card-hover"
            >
              LUMA Page
            </a>
            <a
              href="https://fountain.fm/episode/zAI0tiwnWLsYbmUAUxBK"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl text-center font-semibold shadow-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-[1.02] card-hover"
            >
              Podcast
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
