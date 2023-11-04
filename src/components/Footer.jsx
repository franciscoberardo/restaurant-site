import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Recomm = () => {
  return (
    <section className="bg-black text-white py-5 text-center md:text-left" id="recomm">
      <div className="container mx-auto grid md:grid-cols-3 md:justify-between gap-4">
        <div className="about-img px-2 py-2 relative">
          <p className="text-xl mb-5 font-pridi underline">OPENING HOURS</p>
          <p className="text-l font-pridi">- MONDAY....9:00 - 22:00</p>
          <p className="text-l font-pridi">- TUESDAY.....9:00 - 22:00</p>
          <p className="text-l font-pridi">- WEDNESDAY....9:00 - 22:00</p>
          <p className="text-l font-pridi">- THURSDAY....9:00 - 22:00</p>
          <p className="text-l font-pridi">- FRIDAY....9:00 - 22:00</p>
          <p className="text-l font-pridi">- SATURDAY....9:00 - 22:00</p>
        </div>

        <div className="about-img px-2 py-2 relative md:text-center">
          <p className="text-xl mb-5 pb-2 font-pridi underline">MENU</p>
          <p className="text-l font-pridi">- FRENCH JUICY PEACH</p>
          <p className="text-l font-pridi">- DUCK MAGRET POMEGRANATE</p>
          <p className="text-l font-pridi">- TOURNEDO ROSSINI</p>
          <p className="text-l font-pridi">- GALICIAN-STYLE COD</p>
        </div>

        <div className="about-img px-2 py-2 relative md:text-right">
          <p className="text-xl mb-5 pb-2 font-pridi underline">
            SOCIAL MEDIA
          </p>
          <div className="footer-icons flex justify-center md:justify-end">
            <a href="https://www.facebook.com" aria-label="facebook">
              <FaFacebook className="icon text-4xl" />
            </a>
            <a href="https://www.instagram.com" aria-label="istagram">
              <FaInstagram className="icon text-4xl" />
            </a>
            <a href="https://www.twitter.com" aria-label="twitter">
              <FaTwitter className="icon text-4xl" />
            </a>
            <a href="https://www.youtube.com" aria-label="youtube">
              <FaYoutube className="icon text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomm;
