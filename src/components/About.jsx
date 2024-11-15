import React from "react";
import foto1 from "../assets/wine1.jpg";
import foto2 from "../assets/wine2.jpg";
import foto3 from "../assets/wine3.jpg";
import fondo from "../assets/fondo.jpg";

const About = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="flex flex-col items-center p-4 sm:p-8 font-dancing py-12 sm:py-20 bg-opacity-70">
        <div className="text-center max-w-3xl p-4 sm:p-6 rounded-lg bg-white bg-opacity-40">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
            Unique Tasting Experience
          </h2>
          <p className="text-lg sm:text-2xl text-gray-700 mb-6 sm:mb-8">
            Immerse yourself in the art and passion for wine in our winery. Here, each bottle tells a story that we invite you to discover in our tasting experience.
          </p>
          <p className="font-pridi text-sm sm:text-base mb-4">EST. 1995</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <img
            src={foto1}
            alt="Imagen 1"
            className="w-48 h-64 sm:w-60 sm:h-80 object-cover rounded-lg shadow-lg"
          />
          <img
            src={foto2}
            alt="Imagen 2"
            className="w-48 h-64 sm:w-60 sm:h-80 object-cover rounded-lg shadow-lg"
          />
          <img
            src={foto3}
            alt="Imagen 3"
            className="w-48 h-64 sm:w-60 sm:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
