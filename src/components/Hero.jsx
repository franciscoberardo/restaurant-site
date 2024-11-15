import { motion } from "framer-motion";
import Foto from "../assets/header.jpg";

const Hero = () => {
  const title = "Flanfeu";
  const subtitle = "Restaurant Wine";

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <section className="relative text-white">
        <motion.div
          className="hero-container hero-min-height flex items-center justify-center"
          style={{
            backgroundImage: `url(${Foto})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-white opacity-10"></div>

          <div className="relative container mx-auto flex items-center justify-center h-full">
            <motion.div
              className="hero-info text-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1
                className="text-7xl md:text-9xl font-bold mb-4 font-dancing"
                variants={containerVariants}
              >
                {title}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-dancing tracking-wide"
                variants={subtitleVariants}
              >
                {subtitle}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
