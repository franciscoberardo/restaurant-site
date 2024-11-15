import React from "react";
import imagen1 from "../assets/vineyards.jpg";
import imagen2 from "../assets/membership.jpg";
import imagen3 from "../assets/visit.jpg";
import imagen4 from "../assets/specialEvents.jpg";

const Grid = () => {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black">
        Services
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 w-full h-auto font-dancing gap-2">
        <div
          className="relative bg-cover bg-center h-80"
          style={{ backgroundImage: `url(${imagen1})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <p className="text-white text-3xl font-bold">Vineyards</p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center h-80"
          style={{ backgroundImage: `url(${imagen2})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <p className="text-white text-3xl font-bold">Membership</p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center h-80"
          style={{ backgroundImage: `url(${imagen3})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <p className="text-white text-3xl font-bold">Visit</p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center h-80"
          style={{ backgroundImage: `url(${imagen4})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <p className="text-white text-3xl font-bold">Special Events</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
