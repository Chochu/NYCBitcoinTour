// app/success/page.tsx
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full mx-auto text-center bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your interest in our Bitcoin Tour! We've received your message and will contact you within 24 hours to discuss your tour details.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all block"
          >
            Back to Home
          </Link>
          
          <Link
            href="/bitcoin-tour"
            className="w-full border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all block"
          >
            Submit Another Request
          </Link>
        </div>
      </div>
    </main>
  );
}