import { useState, useEffect } from "react";
import hero from "../assets/pngwing.com.png";

const Hero = () => {
  const words = ["adults", "seniors", "men", "women", "you"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="grid w-full px-6 py-2 md:px-32 lg:py-24 lg:px-44 bg-light-green">
      <div className="grid items-end md:hidden">
        <div className="pb-12">
          <span className="text-4xl font-Lora tracking-wide leading-relaxed">
            <span>The symptom</span> <br />
            <span>checker made by</span> <br /> doctors for <br />
            {/* Animasi kata yang berganti-ganti dengan efek hilang ke atas */}
            <span
              className={`text-dark-blue inline-block transition-all duration-500 ease-in-out transform ${
                isAnimating
                  ? "opacity-0 -translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {words[currentWordIndex]}
            </span>
            <ul className="text-base leading-relaxed my-6">
              <li>✓ Analyze your symptoms</li>
              <li>✓ Understand your health</li>
              <li>✓ Plan your next steps</li>
              <li>✓ Get ready for your visit</li>
            </ul>
          </span>
          <img src={hero} alt="Hero" className="pt-10 h-auto w-3/4 mx-auto" />
        </div>
      </div>
      {/* md screen */}
      <div className=" md:text-5xl borde">
        <div className="hidden md:grid lg:flex lg:items-center lg:px-2">
          <div className="font-Lora tracking-wide lg:mr-8 border border-black">
            <span>The symptom checker made by doctors for</span>
            <br />
            <span
              className={`text-dark-blue inline-block transition-all duration-500 ease-in-out transform ${
                isAnimating
                  ? "opacity-0 -translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {words[currentWordIndex]}
            </span>
            <ul className="text-lg leading-relaxed my-6">
              <li>✓ Analyze your symptoms</li>
              <li>✓ Understand your health</li>
              <li>✓ Plan your next steps</li>
              <li>✓ Get ready for your visit</li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <img
              src={hero}
              alt=""
              className="w-2/3 h-auto lg:h-auto md:mx-auto lg:mx mb-6 object-cover border border-black"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
