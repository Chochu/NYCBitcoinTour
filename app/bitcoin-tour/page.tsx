"use client";
import Link from "next/link";
import { useState } from "react";
import Calendar from "../components/Calendar"; 
import { useRouter } from 'next/navigation';

export default function BitcoinTour() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const router = useRouter();

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    // Clear additional message when date changes
    setAdditionalMessage("");
  };

  // Function to clear the selected date
  const clearSelectedDate = () => {
    setSelectedDate("");
    setAdditionalMessage("");
  };

  // Get the formatted date message (unchangeable part)
  const getDateMessage = () => {
    if (!selectedDate) return "";
    
    // Fix timezone issue by creating date in local timezone
    const date = new Date(selectedDate);
    // Add the timezone offset to ensure we get the correct local date
    const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    
    const formattedDate = localDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return `I would like to schedule a Bitcoin Tour for ${formattedDate}`;
  };

  // Format date for display in the selected date box
  const getDisplayDate = () => {
    if (!selectedDate) return "";
    
    const date = new Date(selectedDate);
    const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    
    return localDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Combine date message with additional message for submission
  const getFullMessage = () => {
    const dateMessage = getDateMessage();
    if (!dateMessage) return additionalMessage;
    if (!additionalMessage) return dateMessage;
    return `${dateMessage}\n\nAdditional details: ${additionalMessage}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("Sending...");

    const form = e.target as HTMLFormElement;
    const formData = new FormData();
    formData.append('name', (form.elements.namedItem('name') as HTMLInputElement).value);
    formData.append('email', (form.elements.namedItem('email') as HTMLInputElement).value);
    formData.append('message', getFullMessage());
    formData.append('_subject', 'Bitcoin Tour Inquiry');
    
    // Also include the selected date as a separate field
    if (selectedDate) {
      formData.append('selected_date', selectedDate);
    }

    try {
      const response = await fetch('https://formspree.io/f/meopyajr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        router.push('/success');
      } else {
        setMessage("Error: Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact us about a <span className="gradient-text">Bitcoin Tour</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Click on a date in the calendar below to select your preferred tour date, then fill out the form.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar & Contact Section */}
      <section className="max-w-6xl mx-auto px-8 py-16 -mt-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
          
          {/* Calendar Display */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Select Your Tour Date</h2>
            <p className="text-gray-600 mb-4">
              Click on any available date (highlighted in green) to select it. Only one date can be selected at a time.
            </p>
            <Calendar onDateSelect={handleDateSelect} />
            
            {/* Selected Date Display */}
            {selectedDate && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-700 font-medium">
                      ✅ Selected Date: {getDisplayDate()}
                    </p>
                    <p className="text-blue-600 text-sm mt-1">
                      The date has been locked in and cannot be changed in the message below.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={clearSelectedDate}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Change Date
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Complete Your Booking
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Satoshi Nakamoto"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="satoshi@example.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Date Message (Read-only) */}
            {selectedDate && (
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Tour Date (Locked)
                </label>
                <div className="w-full px-4 py-3 rounded-lg border border-green-300 bg-green-50 text-green-800 font-medium">
                  {getDateMessage()}
                </div>
                <p className="text-green-600 text-sm mt-1">
                  This date is locked and cannot be modified. To change the date, use the "Change Date" button above.
                </p>
              </div>
            )}

            {/* Additional Message (Editable) */}
            <div className="mt-6">
              <label htmlFor="additionalMessage" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details {!selectedDate && "*"}
                {selectedDate && (
                  <span className="text-gray-500 text-sm ml-2">
                    (Optional - add group size, special requests, etc.)
                  </span>
                )}
              </label>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                rows={4}
                required={!selectedDate} // Only required if no date selected
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder={
                  selectedDate 
                    ? "Add any additional details about your group size, special requests, questions, or anything else we should know..."
                    : "Tell us about your Bitcoin tour requirements, preferred dates, group size, and any questions you have..."
                }
                disabled={isSubmitting}
              />
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Book Bitcoin Tour"
                )}
              </button>
            </div>

            {!selectedDate && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-700 text-sm">
                  ⚠️ Please select a date from the calendar above before submitting.
                </p>
              </div>
            )}
            
            {/* Status Message (only shows errors now) */}
            {message && message.startsWith('Error') && (
              <div className="mt-4 p-4 rounded-lg text-center font-medium bg-red-50 text-red-700 border border-red-200">
                {message}
              </div>
            )}
          </form>

        </div>
        
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">How to Book Your Tour</h4>
          <ul className="text-gray-600 space-y-2">
            <li>• <strong>Step 1:</strong> Click on an available date in the calendar (highlighted in green)</li>
            <li>• <strong>Step 2:</strong> Your selected date will appear in blue and be locked in</li>
            <li>• <strong>Step 3:</strong> Fill in your name and email address</li>
            <li>• <strong>Step 4:</strong> Add any additional details to the message box (optional)</li>
            <li>• <strong>Step 5:</strong> Click "Book Bitcoin Tour" to submit your request</li>
            <li>• We'll confirm your booking via email within 24 hours</li>
          </ul>
        </div>
      </section>
    </main>
  );
}