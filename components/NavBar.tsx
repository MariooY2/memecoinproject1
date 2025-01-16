"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center px-4 mt-5 z-50">
      <nav className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-6 py-4 rounded-3xl shadow-2xl max-w-6xl w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold cursor-pointer">$HOT</div>
          <div className="sm:hidden flex items-cente px-4 py-2r">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/howtobuy" className="hover:text-gray-300">
              How to Buy
            </Link>
            <Link href="/tokenomics" className="hover:text-gray-300">
              Tokenomics
            </Link>
            <Link href="/roadmap" className="hover:text-gray-300">
              Roadmap
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="space-x-4 sm:block hidden ">
            <button className="bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition">
              <Link href="#buy-now" className="font-bold">
                Buy Now
              </Link>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-center bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Home
            </Link>
            <Link
              href="/howtobuy"
              className="block text-center bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              How to Buy
            </Link>
            <Link
              href="/tokenomics"
              className="block text-center bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Tokenomics
            </Link>
            <Link
              href="/roadmap"
              className="block text-center bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Roadmap
            </Link>
            <Link
              href="#buy-now"
              className="block text-center bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition font-bold"
            >
              Buy Now
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
