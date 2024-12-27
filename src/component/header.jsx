import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logo1.png';
import { IoIosArrowDown } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaDiagnoses } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { API_URL } from '../../conn';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);
  const [userName, setUserName] = useState(null); // State untuk nama pengguna

  // Mengambil nama pengguna dari backend menggunakan userID
  useEffect(() => {
    const fetchUserName = async () => {
      const userID = localStorage.getItem('userID'); // Ambil userID dari localStorage
      console.log('UserID from localStorage:', userID);
      if (userID) {
        try {
          const response = await axios.get(`${API_URL}users/${userID}`); // Endpoint untuk mengambil data pengguna
          console.log('API Response:', response.data);
          setUserName(response.data.nama); // Simpan nama pengguna ke state
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserName();
  }, []);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleMouseEnter = () => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
    }
    setIsServiceHovered(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServiceHovered(false);
    }, 300);
    setSubmenuTimeout(timeout);
  };

  const handleLogout = () => {
    localStorage.removeItem('userID'); // Hapus userID dari localStorage
    setUserName(null); // Reset state nama pengguna
    window.location.href = '/'; // Redirect ke halaman utama
  };

  return (
    <header className="bg-light-green md:px-12 lg:px-28 md:shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-auto object-contain" />
          <span className="font-Inter text-xl">
            Diagnosis <span className="text-dark-rose">DBD</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 px-6 items-center">
          <a href="/about" className="text-black hover:underline">About us</a>

          {/* Services with Arrow Icon */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/services" className="text-black hover:underline flex items-center">
              Services
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${
                  isServiceHovered ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </a>

            {/* Submenu Services */}
            {isServiceHovered && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out opacity-100 p-4 z-10">
                <div className="space-y-2 text-left">
                  <span className="text-gray-500">Our service</span>
                  <a
                    href="/consultation"
                    className="flex items-center px-4 py-2 text-dark-rose hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="mr-3"><FaUserDoctor /></span>
                    Konsultasi
                  </a>
                  <a
                    href="/diagnosis"
                    className="flex items-center px-4 py-2 text-dark-rose hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="mr-3"><FaDiagnoses /></span>
                    Diagnosa
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Contact and Diagnosis Button */}
          <div className="flex items-center space-x-4">
            <div
              className="relative"
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
            >
              <a href="/contact" className="text-black hover:underline flex items-center">
                Contact
                <IoIosArrowDown
                  className={`ml-1 transition-transform duration-300 ${
                    isContactHovered ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </a>

              {/* Submenu Contact */}
              {isContactHovered && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md transition-opacity duration-300 ease-in-out opacity-100 p-4 z-10">
                  <div className="space-y-2 text-left">
                    <span className="text-gray-500">Our contact</span>
                    <a
                      href="/gmail"
                      className="flex items-center px-4 py-2 text-dark-rose hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span className="mr-3"><BiLogoGmail /></span>
                      nandolop71@gmail.com
                    </a>
                    <a
                      href="/whatsapp"
                      className="flex items-center px-4 py-2 text-dark-rose hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span className="mr-3"><FaWhatsapp /></span>
                      089652895078
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Kondisi untuk menampilkan nama pengguna atau tombol Register */}
            {userName ? (
              <div className="flex items-center space-x-4">
                <span className="text-dark-blue">{userName}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a href="/register">
                <button className="bg-dark-blue text-white px-4 py-2 rounded hover:bg-blue-300 transition-colors duration-300">
                  Register
                </button>
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
