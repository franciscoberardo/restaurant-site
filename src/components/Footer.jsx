import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import fondo from "../assets/fondo.jpg";

const Footer = () => {
  const title = "Flanfeu";
  const subtitle = "Restaurant Wine";

  return (
    <footer className="text-black pt-20 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold font-dancing">Contact Us</h2>
          <p className="mt-4">Address: 123 Wine Ave, Buenos Aires</p>
          <p>Phone: +54 11 1234 5678</p>
          <a href="mailto:info@flanfeu.com" className="hover:text-red-500">
            info@flanfeu.com
          </a>
        </div>

        {/* Title and Social Links */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold font-dancing">{title}</h1>
          <p className="text-lg font-dancing tracking-wide">{subtitle}</p>
          <div className="flex space-x-4 text-3xl py-4">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="hover:text-red-500 transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="hover:text-red-500 transition duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Twitter"
              className="hover:text-red-500 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              className="hover:text-red-500 transition duration-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Opening Hours or Newsletter */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-2xl font-bold font-dancing">Opening Hours</h2>
          <p className="mt-4">Monday to Friday: 10:00 AM - 10:00 PM</p>
          <p>Saturday and Sunday: 12:00 PM - Midnight</p>
          {/* Or replace with Newsletter */}
          {/* <h2 className="text-2xl font-bold font-dancing mt-6">Subscribe to Our Newsletter</h2>
          <input
            type="email"
            placeholder="Your email"
            className="mt-2 p-2 border rounded"
          />
          <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600">
            Subscribe
          </button> */}
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Classic Wine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
