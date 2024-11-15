import { motion } from "framer-motion";
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
];

const Location = () => {
  const handleMapClick = (link) => {
    window.location.href = link;
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-stone-900 text-white px-5 py-10" id="location">
      <motion.p
        className="text-3xl mb-5 pb-2 text-center font-serif"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Contact & Location
      </motion.p>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-img px-2 py-2">
          {Object.keys(locationData).map((key, index) => (
            <motion.p
              key={key}
              className="text-2xl mb-5 pb-2 text-center font-serif"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              {locationData[key]}
            </motion.p>
          ))}
        </div>

        {imagesData.map((imageItem, index) => (
          <div className="about-img px-2 relative" key={index}>
            <a href={imageItem.mapLink} aria-label="map">
              <div className="relative group">
                <motion.img
                  className="full transition-opacity hover:opacity-75"
                  src={imageItem.image}
                  alt={imageItem.alt}
                  onClick={() => handleMapClick(imageItem.mapLink)}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }} 
                />
                <motion.button
                  className="hidden group-hover:block absolute inset-0 m-auto bg-black opacity-0 hover:opacity-50 text-red px-4 py-2 text-2xl text-center font-serif"
                  onClick={() => handleMapClick(imageItem.mapLink)}
                  aria-label="Open google maps"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  {imageItem.buttonText}
                </motion.button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Location;
