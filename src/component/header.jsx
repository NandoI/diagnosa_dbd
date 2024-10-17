import React, { useState } from 'react';
import logo from '../assets/logo1.png';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={logo}
            alt="Logo" 
            className="w-28 h-auto object-contain" // Membatasi ukuran gambar
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 px-6">
          <a href="/" className="text-dark-rose hover:text-gray-500">Home</a>
          <a href="/about" className="text-dark-rose hover:text-gray-500">About Us</a>
          <a href="/services" className="text-dark-rose hover:text-gray-500">Services</a>
          <a href="/contact" className="text-dark-rose hover:text-gray-500">Contact</a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="flex flex-col items-center space-y-1 px-6">
            <div className={`h-0.5 w-6 bg-dark-rose transition-all ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`h-0.5 w-6 bg-dark-rose transition-all ${navOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-6 bg-dark-rose transition-all ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${navOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-6 space-y-6">
          <a href="/" className="text-dark-rose text-lg hover:text-gray-500">Home</a>
          <a href="/about" className="text-dark-rose text-lg hover:text-gray-500">About Us</a>
          <a href="/services" className="text-dark-rose text-lg hover:text-gray-500">Services</a>
          <a href="/contact" className="text-dark-rose text-lg hover:text-gray-500">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
