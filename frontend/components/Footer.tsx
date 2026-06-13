import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold">
              Trishul Eco Homestays
            </h2>

            <p className="mt-3 text-gray-400">
              Experience comfort, nature and unforgettable stays.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">Rooms</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            
            <h3 className="text-xl font-semibold mb-3">
                Contact Us
            </h3>

            <ul className="space-y-2 text-gray-400">
                <li>📞 +91 98XXXXXX10</li>
                <li>📧 info@trishuleco.com</li>
                <li>📍 Uttarakhand, India</li>
            </ul>

          </div>


          {/* Social Media Icons */}
        <div>
              <h3 className="text-xl font-semibold mb-3">
                Follow Us
              </h3>

              <div className="flex gap-4 text-2xl">
                <a href="#" aria-label="Instagram"
                className="hover:text-pink-500 transition-colors">
                  <FaInstagram />
                </a>

                <a href="#" aria-label="Facebook"
                className="hover:text-blue-500 transition-colors">
                  <FaFacebookF />
                </a>

                <a href="#"aria-label="WhatsApp"
                className="hover:text-green-500 transition-colors">
                  <FaWhatsapp />
                </a>

                <a href="#" aria-label="YouTube"
                className="hover:text-red-500 transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 Trishul Eco Homestays. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}