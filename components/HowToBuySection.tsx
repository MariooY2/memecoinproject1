import { HiOutlineArrowDown, HiOutlineArrowSmDown } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { BiSolidCoinStack } from "react-icons/bi";
import { SiSolana } from "react-icons/si";
import { IoMdSwap } from "react-icons/io";
import { BiGhost } from "react-icons/bi";
export default function HowToBuySection() {
  return (
    <section
      id="how-to-buy"
      className="z-0 min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 flex flex-col items-center py-16 px-4"
    >
      <div className="w-full h-11"></div>
      <h2 className="text-6xl md:text-7xl font-extrabold text-yellow-200 mb-16">
        How to Buy
      </h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-28 relative">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center">
          <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20 w-full h-64">
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
          {/* Horizontal Arrow for larger screens */}
          <div className="hidden md:flex absolute top-1/2 -right-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmRight className="text-8xl" />
          </div>
          {/* Down Arrow for smaller screens */}
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown className="text-8xl" />
          </div>
        </div>
        {/* Step 2 */}
        <div className="relative flex flex-col items-center">
          <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20 w-full h-64">
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
          {/* Vertical Arrow for larger screens */}
          <div className="hidden md:flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmDown className="text-8xl" />
          </div>
          {/* Down Arrow for smaller screens */}
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown className="text-8xl" />
          </div>
        </div>
        <div className="relative flex flex-col items-center md:hidden block">
          <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20 w-full h-64">
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
          {/* Left Arrow for larger screens */}
          <div className="hidden md:flex absolute top-1/2 -left-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmLeft className="text-8xl" />
          </div>
          {/* Down Arrow for smaller screens */}
          <div className="md:hidden flex absolute top-1/2 -left-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown className="text-8xl" />
          </div>
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown className="text-8xl" />
          </div>
        </div>
        {/* Step 3 */}
        <div className="relative flex flex-col items-center md:block hidden">
          <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20 w-full h-64">
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
          {/* Down Arrow for smaller screens */}
          <div className="md:hidden flex absolute -bottom-[6.5rem] left-1/2 transform -translate-x-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown className="text-8xl" />
          </div>
        </div>
        {/* Step 4 */}
        <div className="relative flex flex-col items-center md:block hidden">
          <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20 w-full h-64">
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
          {/* Left Arrow for larger screens */}
          <div className="hidden md:flex absolute top-1/2 -left-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowSmLeft className="text-8xl" />
          </div>
          {/* Down Arrow for smaller screens */}
          <div className="md:hidden flex absolute top-1/2 -left-[6.5rem] transform -translate-y-1/2 text-yellow-200 items-center">
            <HiOutlineArrowDown className="text-8xl" />
          </div>
        </div>
        <div className="relative flex flex-col items-center md:hidden block">
          <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white border-opacity-20 w-full h-64">
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
          {/* Down Arrow for smaller screens */}
         
          
        </div>
      </div>
    </section>
  );
}
