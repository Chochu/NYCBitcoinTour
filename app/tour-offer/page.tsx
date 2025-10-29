import Link from "next/link";

export default function TourOffer() {
  const tourOptions = [
    { name: "Visit Safari", url: "https://safariharlem.com/", icon: "🍽️" },
    { name: "Visit Pubkey", url: "https://www.pubkey.bar/", icon: "🍺" },
    { name: "Visit the expat", url: null, icon: "🌍" },
    { name: "Visit btcnyc lab space", url: "https://btcnyc.github.io/", icon: "⚡" },
    { name: "Bitcoin walk", url: "https://bitcoinwalk.org/", icon: "🚶" },
  ];

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

          <div className="text-center">
            <div className="inline-block px-4 py-2 mb-6 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-cyan-300 text-sm font-semibold">Explore Bitcoin Locations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tour <span className="gradient-text">Offers</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover amazing Bitcoin-friendly locations throughout New York City
            </p>
          </div>
        </div>
      </section>

      {/* Tour Options Section */}
      <section className="max-w-4xl mx-auto px-8 py-16 -mt-8">
        <div className="space-y-4">
          {tourOptions.map((tour, index) => {
            const baseClasses = "block w-full py-5 px-8 rounded-xl text-center font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] card-hover";
            
            if (tour.url) {
              return (
                <a
                  key={index}
                  href={tour.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClasses} bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl">{tour.icon}</span>
                    <span>{tour.name}</span>
                  </div>
                </a>
              );
            }
            return (
              <button
                key={index}
                className={`${baseClasses} bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700`}
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">{tour.icon}</span>
                  <span>{tour.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
