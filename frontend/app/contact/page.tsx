export default function ContactPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            We'd love to hear from you. Reach out for bookings,
            inquiries, or special requests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                📍 <strong>Address:</strong>
                <br />
                Trishul Eco Homestay,
                Village XYZ, Uttarakhand, India
              </p>

              <p>
                📞 <strong>Phone:</strong>
                <br />
                +91 98765 43210
              </p>

              <p>
                📧 <strong>Email:</strong>
                <br />
                info@trishulecohomestay.com
              </p>

              <p>
                ⏰ <strong>Availability:</strong>
                <br />
                24/7 Booking Support
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}