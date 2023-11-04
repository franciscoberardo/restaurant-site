import One from "../assets/one.webp";
import Two from "../assets/two.webp";
import Four from "../assets/four.webp";
import Five from "../assets/five.webp";

const recommendationsData = [
  {
    image: One,
    description: "French juicy peach",
  },
  {
    image: Two,
    description: "Duck magret pomegranate",
  },
  {
    image: Four,
    description: "Tournedo Rossini",
  },
  {
    image: Five,
    description: "Galician-style cod",
  },
];

const Recomm = () => {
  const imageStyles = {
    width: "800px",
    height: "400px",
    objectFit: "cover",
  };

  return (
    <section className="bg-stone-900 text-white px-5 py-10" id="recomm">
      <p className="text-2xl mb-5 pb-2 text-center font-pridi">
        Recommendations
      </p>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        {recommendationsData.map((item, index) => (
          <div className="about-img px-2 relative py-2" key={index}>
            <img
              className="full"
              src={item.image}
              style={imageStyles}
              alt={`Image ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex items-center justify-center text-white text-3xl font-bold opacity-0 hover:opacity-100 duration-300">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recomm;
