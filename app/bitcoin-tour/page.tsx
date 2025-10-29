import Link from "next/link";
import Calendar from "../components/Calendar";

export default function BitcoinTour() {
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

          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 mb-6 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-cyan-300 text-sm font-semibold">Schedule Your Tour</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule your <span className="gradient-text">Bitcoin Tour</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select a date and time that works for you. Join us for an unforgettable Bitcoin experience in NYC.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="max-w-6xl mx-auto px-8 py-16 -mt-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <Calendar />
        </div>
        
        {/* Info Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Book Your Tour</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Click on any available date (highlighted in green) to select it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Drag to select multiple days or use the time slots for specific times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Click on existing events to view or cancel your booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use the navigation buttons to switch between month, week, and day views</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
