"use client";

import PurpleBlob from "./PurpleBlob";
import { Leaf, CoinsIcon, BarChart3, Recycle, Trophy, Trees } from "lucide-react";

const Features = () => {
  return (
    <div className="relative bg-black text-white h-auto min-h-[700px] w-full max-w-[1800px] rounded-2xl px-16 py-20 mx-auto overflow-hidden">
      {/* Enhanced Purple Background Blobs */}
      <PurpleBlob className="top-[-100px] right-[-150px] scale-125" />
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-700 rounded-full blur-3xl opacity-50"></div>
      {/* <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-700 rounded-full blur-3xl opacity-50"></div> */}

      <div className="flex flex-col items-center mb-16 relative z-10">
        <div className="bg-gray-800/60 py-3 px-8 rounded-xl mb-6 backdrop-blur-sm border border-purple-500/20">
          <h1 className="text-3xl text-white font-bold">About CarbonX</h1>
        </div>

      </div>

      {/* Three Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Card 1 - Rewarding Organizations */}
        <div className=" rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
          <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">Rewarding Impact</h2>
          <p className="text-gray-300 mb-6">
            Organizations making positive environmental impacts receive tokenized rewards for their carbon offset initiatives. Each verified offset is minted as a unique NFT on the Solana blockchain.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span>Verifiable carbon offset certificates</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span>Automated reward distribution</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span>Transparent impact tracking</span>
            </li>
          </ul>
        </div>

        {/* Card 2 - NFT Marketplace */}
        <div className="    rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
          <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <CoinsIcon className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">NFT Marketplace</h2>
          <p className="text-gray-300 mb-6">
            Trade unique carbon offset NFTs on our Solana-powered marketplace. Each NFT represents a quantifiable environmental impact, creating value from sustainability efforts.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span>Low-fee Solana transactions</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span>Exclusive environmental artwork</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span>Fractionalized ownership options</span>
            </li>
          </ul>
        </div>

        {/* Card 3 - Sustainable Ecosystem */}
        <div className=" rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
          <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Trees className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent">Growing Ecosystem</h2>
          <p className="text-gray-300 mb-6">
            Join a thriving community of environmentally conscious investors and organizations. Our platform creates a sustainable ecosystem where environmental action has real financial value.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Community governance</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Impact investment opportunities</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Transparent carbon metrics</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  );
};

export default Features;