import { FaGlobe, FaChartLine } from "react-icons/fa";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="z-0 min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white flex sm:flex-row flex-col items-center justify-center">
      <div className="w-full h-28 sm:hidden block"></div>
      <div className="container w-2/3 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="sm:w-1/2">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
            <span className="text-yellow-200">$HOT</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            The spiciest meme coin in the universe. $HOT is here to set the
            crypto world on fire with its blazing popularity. Join the
            revolution and get ready to ignite your portfolio!
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              href="#telegram"
              className="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition flex items-center"
            >
              <BsTelegram className="text-xl" />
            </Link>
            <Link
              href="#twitter"
              className="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition flex items-center"
            >
              <BsTwitterX className="text-xl" />
            </Link>
            <Link
              href="#website"
              className="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition flex items-center"
            >
              <FaGlobe className="text-xl" />
            </Link>
            <Link
              href="#chart"
              className="bg-white text-red-600 p-3 rounded-lg hover:bg-gray-100 transition flex items-center"
            >
              <FaChartLine className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="sm:w-1/2 mt-8 md:mt-0">
          <Image
            src="/HOT.webp"
            alt="Hot Meme Coin"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto"
            priority // Ensures the image is loaded immediately for hero sections
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
