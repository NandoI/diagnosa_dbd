import { useState, useEffect } from "react";
import hero from '../assets/pngwing.com.png'


const Hero = () => {
    const words = ["adults", "seniors", "men", "women", "you"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // Untuk mengatur animasi

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
        <header className="grid w-full px-6 py-2 md:px-20 lg:px-36 bg-light-green">
            <div className="grid items-end">
                <img src="" alt="" />
                <div className="pb-12">
                    <span className="text-4xl font-Lora tracking-wide leading-relaxed">
                        <span>The symptom</span> <br />
                        <span>checker made by</span> <br /> doctors for <br />
                        {/* Animasi kata yang berganti-ganti dengan efek hilang ke atas */}
                        <span
                            className={`text-dark-blue inline-block transition-all duration-500 ease-in-out transform ${
                                isAnimating ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
                            }`}
                        >
                            {words[currentWordIndex]}
                        </span>
                    </span>
                    <img src={hero}
                    alt="Hero" 
                    className="pt-10"
                    />
                </div>
            </div>
        </header>
    );
}

export default Hero;
