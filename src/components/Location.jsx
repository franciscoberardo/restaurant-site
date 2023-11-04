import Map from "../assets/map.webp";

const locationData = {
  address: "Bodega 1995, M9199 Maipú, Mendoza",
  cellPhone: "(+54) 454-957741",
  email: "bodega.arg@gmail.com",
};

const imagesData = [
  {
    image: Map,
    alt: "Map Image",
    buttonText: "Abrir en Google Maps",
    mapLink: "https://www.google.com/maps/place/Mendoza,+Capital,+Mendoza/",
  },
  // Agrega más objetos para más imágenes si es necesario
];

const Location = () => {
  const handleMapClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="bg-stone-900 text-white px-5 py-10" id="location">
      <p className="text-2xl mb-5 pb-2 text-center font-pridi">
        Contact & Location
      </p>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-img px-2 py-2">
          {Object.keys(locationData).map((key) => (
            <p key={key} className="text-2xl mb-5 pb-2 text-center font-pridi">
              {locationData[key]}
            </p>
          ))}
        </div>

        {imagesData.map((imageItem, index) => (
          <div className="about-img px-2 relative" key={index}>
            <a href={imageItem.mapLink} aria-label="map">
              <div className="relative group">
                <img
                  className="full transition-opacity hover:opacity-75"
                  src={imageItem.image}
                  alt={imageItem.alt}
                  onClick={() => handleMapClick(imageItem.mapLink)}
                />
                <button
                  className="hidden group-hover:block absolute inset-0 m-auto bg-black opacity-0 hover:opacity-50 text-red px-4 py-2 text-2xl text-center font-pridi"
                  onClick={() => handleMapClick(imageItem.mapLink)}
                  aria-label="Open google maps"
                >
                  {imageItem.buttonText}
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;
