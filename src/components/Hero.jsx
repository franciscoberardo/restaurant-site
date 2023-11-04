import Header from "./Header";
import Foto from '../assets/wine_upscaled.webp'

const Hero = () => {
  return (
    <section className="text-white">
      <Header />
      <div
        className="hero-container hero-min-height" // Aplica las clases personalizadas
        style={{
          backgroundImage: `url(${Foto})`, // Ajusta la ruta de la imagen según tu proyecto
          backgroundPosition: "center 50%", // Ajusta la posición de la imagen de fondo
        }}
      >
        <div className="container mx-auto grid lg:grid-cols-2 items-center justify-center lg:justify-between">
          <div className="hero-info pb-5 md:pb-0 pt-20">
            {/* Aquí puedes colocar contenido dinámico, si es necesario */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
