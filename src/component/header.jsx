import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import { IoIosArrowDown } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaDiagnoses } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isContactHovered, setIsContactHoverd] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  // Submenu mouse enter
  const handleMouseEnter = () => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
    }
    setIsServiceHovered(true);
  };

  // Submenu mouse leave
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServiceHovered(false);
    }, 300);
    setSubmenuTimeout(timeout);
  };

  return (
    <header className="bg-white md:px-12 lg:px-28 md:shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={logo}
            alt="Logo" 
            className="w-24 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 px-6 items-center">
          <a href="/about" className="text-dark-rose hover:underline">About us</a>

          {/* Services with Arrow Icon */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          >
            <a
              href="/services"
              className="text-dark-rose hover:underline flex items-center"
            >
              Services
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${
                  isServiceHovered ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </a>

            {/* Submenu */}
            {isServiceHovered && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out opacity-100 p-4">
                <div className="space-y-2 text-left">
                  <span className='text-gray-500'>our service</span>
                  <a 
                    href="/consultation" 
                    className="flex items-center px-4 py-2 text-dark-rose hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="mr-3"><FaUserDoctor/></span>
                    Konsultasi
                  </a>
                  <a 
                    href="/diagnosis" 
                    className="flex items-center px-4 py-2 text-dark-rose hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="mr-3"><FaDiagnoses/></span>
                    Diagnosa
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Contact and Diagnosis Button */}
          <div className='flex items-center space-x-4'>
            <div className='relative'
              onMouseEnter={() => setIsContactHoverd(true)}
              onMouseLeave={() => setIsContactHoverd(false)}
            >
              <a href="/contact" className="text-dark-rose hover:underline flex items-center">
                Contact
                <IoIosArrowDown 
                  className={`ml-1 transition-transform duration-300 ${
                    isContactHovered ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </a>
            </div>
            <a href="/diagnosis">
              <button className="bg-dark-blue text-white px-4 py-2 rounded hover:bg-blue-300 transition-colors duration-300">
                Diagnosis
              </button>
            </a>
          </div>
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
