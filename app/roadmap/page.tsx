"use client";
import { useState, useEffect } from "react";
import { FaRocket, FaChartLine } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

const RoadmapPage = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phases = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Phase 1: Launch",
      period: "Q1 2025",
      items: [
        "Website Launch",
        "Social Media Launch",
        "Community Building",
        "Token Launch on Raydium",
        "First Marketing Push",
      ],
      status: "In Progress",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Phase 2: Growth",
      period: "Q2 2025",
      items: [
        "CoinGecko Listing",
        "CoinMarketCap Listing",
        "Community Expansion",
        "Strategic Partnerships",
        "Influencer Marketing Campaign",
      ],
      status: "Upcoming",
    },
    {
      icon: <SiSolana className="text-3xl" />,
      title: "Phase 3: Expansion",
      period: "Q3 2025",
      items: [
        "Major CEX Listing",
        "Enhanced Utility Development",
        "Cross-Chain Integration",
        "HOT Governance System",
        "Community DAO Launch",
      ],
      status: "Upcoming",
    },
    {
      icon: <HiSparkles className="text-3xl" />,
      title: "Phase 4: Evolution",
      period: "Q4 2025",
      items: [
        "Global Marketing Campaign",
        "Strategic Partnerships",
        "Platform Integration",
        "NFT Collection Launch",
        "Ecosystem Expansion",
      ],
      status: "Upcoming",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-yellow-400 animate-pulse";
      default:
        return "bg-white/30";
    }
  };

  return (
    <section
      id="roadmap"
      className="z-0 min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 flex flex-col items-center py-16 px-4 overflow-hidden"
    >
      <div className="w-full h-11"></div>
      <h2
        className={`sm:text-6xl md:text-7xl text-5xl font-extrabold text-yellow-200 mb-16 transition-all duration-700 
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        Roadmap
      </h2>

      <div className="max-w-6xl w-full space-y-8">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : index % 2 === 0
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            } delay-${index * 200}`}
          >
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl transition-all duration-500 ${
                activePhase === index ? "scale-105" : "scale-100"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-yellow-200">
                    {phase.title}
                  </h2>
                  <p className="text-white/80 mt-1">{phase.period}</p>
                </div>
                <div
                  className={`px-4 py-2 rounded-full ${getStatusColor(
                    phase.status
                  )} text-white text-sm font-semibold`}
                >
                  {phase.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phase.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-200"></div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Progress */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
          <div className="w-full bg-white/10 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-yellow-200 to-red-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-4 text-white/80 text-sm">
            <span>Start</span>
            <span>Q4 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPage;
