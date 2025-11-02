import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-200 to-orange-300">
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
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 p-1 shadow-2xl mb-6 overflow-hidden">
              <Image
                src="/tour-image.png"
                alt="Bitcoin Tour Group"
                width={192}
                height={192}
                className="w-full h-full rounded-full object-cover"
                priority
              />
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
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side - YouTube links */}
          <div className="space-y-4 md:col-span-2">
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <div style={{ position: 'relative', paddingTop: '60%' }}>
                <iframe
                  src="https://www.youtube.com/embed/JY4b8doOz1c"
                  title="NYC Bitcoin Tour Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <div style={{ position: 'relative', paddingTop: '60%' }}>
                <iframe
                  src="https://www.youtube.com/embed/GsDL15Uc4V4"
                  title="NYC Bitcoin Tour Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <div style={{ position: 'relative', paddingTop: '60%' }}>
                <iframe
                  src="https://www.youtube.com/embed/IPakT25YMVg"
                  title="NYC Bitcoin Tour Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right side - LUMA and Podcast */}
          <div className="space-y-4">
            <a
              href="https://luma.com/user/dion"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-center font-semibold shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-[1.02] card-hover"
            >
              Events Page
            </a>
            <a
              href="https://fountain.fm/episode/zAI0tiwnWLsYbmUAUxBK"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-center font-semibold shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] card-hover"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
                <span>Featured in Once Bitten! A Bitcoin Podcast</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
