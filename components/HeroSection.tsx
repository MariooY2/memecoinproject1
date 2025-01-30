"use client";
import { FaGlobe, FaChartLine } from "react-icons/fa";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="z-0 min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white flex sm:flex-row flex-col items-center justify-center">
      <div className="w-full h-28 sm:hidden block"></div>
      <div className="container w-2/3 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="sm:w-1/2">
          <h1
            className={`text-6xl md:text-7xl font-extrabold mb-4 transition-all duration-1000
            ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <span
              className={`text-yellow-200 inline-block transition-all duration-700 delay-300
              ${animate ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              $HOT
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl font-light mb-6 transition-all duration-700 delay-500
            ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The spiciest meme coin in the universe. $HOT is here to set the
            crypto world on fire with its blazing popularity. Join the
            revolution and get ready to ignite your portfolio!
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            {[
              { href: "https://t.me/HOTMOJI", Icon: BsTelegram },
              { href: "https://x.com/HOTMOJI_CRYPTO", Icon: BsTwitterX },
              { href: "#website", Icon: FaGlobe },
              { href: "#chart", Icon: FaChartLine },
            ].map(({ href, Icon }, index) => (
              <Link
                key={href}
                href={href}
                className={`bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 
                  transition-all duration-500 hover:scale-110 
                  ${
                    animate
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <Icon className="text-xl" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="sm:w-1/2 mt-8 md:mt-0 relative">
          {/* Image with animation */}
          <div
            className={`relative z-10 transition-all duration-1000 delay-500
            ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <Image
              src="/HOT.webp"
              alt="Hot Meme Coin"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
