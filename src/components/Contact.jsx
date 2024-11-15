import React from "react";
import wineImage from "../assets/wine.jpg"; // Asegúrate de tener esta imagen en la carpeta correcta
import fondo from "../assets/fondo.jpg";

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center w-full h-auto lg:h-[500px] p-6 w-full bg-white my-20">
      {/* Formulario */}
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
        <form className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-md font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-md font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-md font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Imagen */}
      <div className="hidden lg:block w-full lg:w-1/2 h-full">
        <div
          className="w-full h-full bg-cover bg-center rounded-md shadow-lg"
          style={{ backgroundImage: `url(${wineImage})`, height: '100%' }}
        ></div>
      </div>
    </section>
  );
};

export default Contact;
