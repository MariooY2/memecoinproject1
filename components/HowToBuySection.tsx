"use client";
import { HiOutlineArrowDown, HiOutlineArrowSmDown } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { BiSolidCoinStack } from "react-icons/bi";
import { SiSolana } from "react-icons/si";
import { IoMdSwap } from "react-icons/io";
import { BiGhost } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function HowToBuySection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const cardClasses = `flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl 
    border border-white border-opacity-20 w-full lg:h-52 h-72 transition-all duration-700 
    ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  const arrowClasses = `text-8xl transition-all duration-700 
    ${animate ? "opacity-100 scale-100" : "opacity-0 scale-50"}`;

  return (
    <section
      id="how-to-buy"
      className="z-0 min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 flex flex-col items-center py-16 px-4"
    >
      <div className="w-full h-11"></div>
      <h2
        className={`sm:text-6xl md:text-7xl text-5xl font-extrabold text-yellow-200 mb-16 transition-all duration-700 
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        How to Buy
      </h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-28 relative">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center">
          <div className={cardClasses} style={{ transitionDelay: "200ms" }}>
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <BiGhost className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">
                Create a Phantom Wallet
              </h3>
              <p className="text-white text-opacity-90">
                To create a Solana Phantom wallet, download the Phantom
                extension for your browser, follow the setup instructions,
                generate a new wallet, securely store your recovery phrase, and
                you&apos;re ready to manage Solana assets.
              </p>
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 -right-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmRight
              className={arrowClasses}
              style={{ transitionDelay: "300ms" }}
            />
          </div>
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown
              className={arrowClasses}
              style={{ transitionDelay: "300ms" }}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center">
          <div className={cardClasses} style={{ transitionDelay: "400ms" }}>
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <SiSolana className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">
                Purchase Some Solana
              </h3>
              <p className="text-white text-opacity-90">
                To buy Sol, first create an account on a cryptocurrency exchange
                supporting Solana, deposit funds, trade for Sol tokens, withdraw
                to your Solana wallet address, and confirm the transfer.
              </p>
            </div>
          </div>
          <div className="hidden md:flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmDown
              className={arrowClasses}
              style={{ transitionDelay: "500ms" }}
            />
          </div>
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown
              className={arrowClasses}
              style={{ transitionDelay: "500ms" }}
            />
          </div>
        </div>

        {/* Mobile Step 3 */}
        <div className="relative flex flex-col items-center md:hidden block">
          <div className={cardClasses} style={{ transitionDelay: "600ms" }}>
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <BiSolidCoinStack className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">
                Connect Wallet to pump.fun
              </h3>
              <p className="text-white text-opacity-90">
                Use pump.fun or Phantom wallet to swap $SOL to $HOT instantly.
              </p>
            </div>
          </div>
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown
              className={arrowClasses}
              style={{ transitionDelay: "700ms" }}
            />
          </div>
        </div>

        {/* Desktop Step 3 */}
        <div className="relative flex flex-col items-center md:block hidden">
          <div className={cardClasses} style={{ transitionDelay: "600ms" }}>
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <IoMdSwap className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">
                Swap Sol for HOT
              </h3>
              <p className="text-white text-opacity-90">
                To purchase $HOT coin using Pump.fun, connect your Solana
                wallet, navigate to the $HOT trading pair, enter the desired
                amount, confirm the transaction, and receive $HOT tokens in your
                wallet.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Step 4 */}
        <div className="relative flex flex-col items-center md:block hidden">
          <div className={cardClasses} style={{ transitionDelay: "800ms" }}>
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <BiSolidCoinStack className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">
                Connect Wallet to pump.fun
              </h3>
              <p className="text-white text-opacity-90">
                Use pump.fun or Phantom wallet to swap $SOL to $HOT instantly.
              </p>
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 -left-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmLeft
              className={arrowClasses}
              style={{ transitionDelay: "900ms" }}
            />
          </div>
        </div>

        {/* Mobile Step 4 */}
        <div className="relative flex flex-col items-center md:hidden block">
          <div className={cardClasses} style={{ transitionDelay: "800ms" }}>
            <div className="bg-yellow-200 p-4 rounded-xl shadow-lg">
              <IoMdSwap className="text-2xl text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-2">
                Swap Sol for HOT
              </h3>
              <p className="text-white text-opacity-90">
                To purchase $HOT coin using Pump.fun, connect your Solana
                wallet, navigate to the $HOT trading pair, enter the desired
                amount, confirm the transaction, and receive $HOT tokens in your
                wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
