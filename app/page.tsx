import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-8 py-20 md:py-32">
          {/* Picture of the tour guy */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 p-1 shadow-2xl overflow-hidden">
              <Image
                src="/tour-image.png"
                alt="Bitcoin Tour Group"
                width={192}
                height={192}
                className="w-full h-full rounded-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 mb-6 bg-orange-100 backdrop-blur-sm rounded-full border border-orange-300">
              <span className="text-orange-900 text-sm font-semibold">New! Explore Bitcoin in NYC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover <span className="gradient-text">Bitcoin</span> in the Big Apple
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for an immersive tour through New York City&apos;s Bitcoin ecosystem. Visit Bitcoin-friendly locations, meet the community, and learn about the future of money.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="max-w-2xl mx-auto space-y-4">
            <Link
              href="/bitcoin-tour"
              className="block w-full py-5 px-8 gradient-button text-white rounded-xl text-center font-semibold text-lg shadow-lg"
            >
              Schedule your Bitcoin Tour
            </Link>
            <Link
              href="/tour-offer"
              className="block w-full py-5 px-8 bg-white/10 backdrop-blur-sm text-white rounded-xl text-center font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Tour offer
            </Link>
            <Link
              href="/about"
              className="block w-full py-5 px-8 bg-white/10 backdrop-blur-sm text-white rounded-xl text-center font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              About us
            </Link>
          </div>
        </div>

        {/* Wave separator */}
        <div className="wave-separator"></div>
      </section>
    </main>
  );
}
