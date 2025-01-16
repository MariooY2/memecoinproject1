"use client"
import { FaFire } from "react-icons/fa";
import { useState, useEffect } from "react";

const TokenomicsPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="tokenomics"
      className="min-h-screen  bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 flex flex-col items-center py-16 px-4"
    >
      <div className="w-full h-11"></div>
      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-200 mb-16">
        Tokenomics
      </h1>

      {/* Main Content Container */}
      <div className="max-w-6xl w-full">
        {/* Burning Schedule Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <FaFire className="text-3xl text-red-600 animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold text-yellow-200">
              Burning Schedule
            </h2>
          </div>

          {/* Burning Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-yellow-200 mb-3">
                  Burn Mechanism
                </h3>
                <p className="text-white/90 leading-relaxed">
                  $HOT implements a strategic 5% token burn for every milestone
                  reached on Raydium. This deflationary mechanism helps increase
                  the value of remaining tokens while rewarding long-term
                  holders.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-yellow-200 mb-3">
                  Burn Impact
                </h3>
                <ul className="text-white/90 space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-200 rounded-full"></span>
                    Increased Scarcity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-200 rounded-full"></span>
                    Price Stability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-200 rounded-full"></span>
                    Long-term Value Growth
                  </li>
                </ul>
              </div>
            </div>

            {/* Milestone Tracker */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-yellow-200 mb-6">
                Burn Milestones
              </h3>
              <div className="space-y-6">
                <div
                  className={`transform transition-all duration-1000 ${
                    animate
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">
                      First 1000 Holders
                    </span>
                    <span className="text-yellow-200 font-bold">5% Burn</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-4">
                    <div className="bg-gradient-to-r from-red-500 to-yellow-300 h-4 rounded-full w-1/4 animate-pulse"></div>
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-1000 delay-200 ${
                    animate
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">
                      $1M Market Cap
                    </span>
                    <span className="text-yellow-200 font-bold">5% Burn</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-4">
                    <div className="bg-gradient-to-r from-red-500 to-yellow-300 h-4 rounded-full w-2/4 animate-pulse"></div>
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    animate
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">
                      5000 Holders
                    </span>
                    <span className="text-yellow-200 font-bold">5% Burn</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-4">
                    <div className="bg-gradient-to-r from-red-500 to-yellow-300 h-4 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Supply Info */}
          <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-yellow-200 font-bold mb-2">
                  Initial Supply
                </h4>
                <p className="text-white text-2xl font-bold">1,000,000,000</p>
              </div>
              <div>
                <h4 className="text-yellow-200 font-bold mb-2">
                  Burned Tokens
                </h4>
                <p className="text-white text-2xl font-bold">0</p>
              </div>
              <div>
                <h4 className="text-yellow-200 font-bold mb-2">
                  Circulating Supply
                </h4>
                <p className="text-white text-2xl font-bold">1,000,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsPage;
