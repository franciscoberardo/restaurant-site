import Foto from "../assets/mendoza.webp";

const About = () => {
  return (
    <section className="bg-stone-900 text-white px-5 py-10" id="about">
      <h2 className="text-2xl mb-5 pb-2 font-pridi text-center">About us</h2>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info px-10">
          <p className="pb-5 font-pridi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            auctor vitae quam nec pellentesque. Nulla facilisi. Fusce tincidunt,
            ligula eu tincidunt consequat, tortor mauris volutpat justo, eu
            bibendum odio tortor id mi. Sed.{" "}
          </p>
        </div>

        <div className="about-img">
          <img className="full" src={Foto} alt="about image"/>
        </div>
      </div>
    </section>
  );
};

export default About;
