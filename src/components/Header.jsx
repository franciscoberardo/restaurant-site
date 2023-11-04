
function Header() {

  return (
    <header className="lative bg-black bg-opacity-50 flex justify-between px-5 py-6 text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent font-pacifico" aria-label="Classic Wine">
        Classic Wine
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/" className="text-xl font-pridi" aria-label="Home">Home</a>
          </li>
          <li>
            <a href="/#about" className="text-xl font-pridi" aria-label="About">About</a>
          </li>
          <li>
            <a href="/#recomm" className="text-xl font-pridi" aria-label="Recommendations">Recommendations</a>
          </li>
          <li>
            <a href="/#location" className="text-xl font-pridi" aria-label="Location" >Location</a>
          </li>
        </ul>
      </nav>

      <button className="bg-red-400 bg-opacity-70 rounded-full" aria-label="Reservation">
        <p className="mx-5 text-black font-pridi">Reservation</p>
      </button>

    </header>
  );
}

export default Header;
