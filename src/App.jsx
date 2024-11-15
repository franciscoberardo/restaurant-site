import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Reviews from "./components/Reviews";
import fondo from "./assets/fondo.jpg";


function App() {
  return (
    <>
      <Hero />
      <About />
      <Grid />
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${fondo})` }}>
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default App;