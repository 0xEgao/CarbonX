"use client";

import { FC } from "react";
import PurpleBlob from "./PurpleBlob";
import { CoinsIcon, Trophy, Trees } from "lucide-react";

interface FeatureI {
  id?: string;
}

const Features: FC<FeatureI> = ({ id }) => {
  return (
    <div className="relative bg-black text-white h-auto min-h-[700px] w-full max-w-[1800px] rounded-2xl px-4 md:px-16 py-20 mx-auto overflow-hidden" id={id}>
      {/* Enhanced Purple Background Blobs */}
      <PurpleBlob className="top-[-100px] right-[-150px] scale-125" />
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-700 rounded-full blur-3xl opacity-50"></div>

      <div className="flex flex-col items-center mb-16 relative z-10">
        <div className="bg-gray-800/60 py-3 px-8 rounded-xl mb-6 backdrop-blur-sm border border-purple-500/20">
          <h1 className="text-3xl text-white font-bold">About CarbonX 🌿🌍</h1>
        </div>
      </div>

      {/* Three Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Card 1 - Rewarding Organizations */}
        <div className="rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
          <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">Supporting Environmental NGOs</h2>
          <p className="text-gray-300 mb-6">
            CarbonX connects verified environmental organizations with users and businesses looking to support ecological causes. These organizations can register and list their NFT projects, directly funding real-world environmental actions.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span>Transparent funding for environmental projects</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span>Empowering NGOs through NFT listings</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span>Direct impact support for conservation initiatives</span>
            </li>
          </ul>
        </div>

        {/* Card 2 - NFT Marketplace */}
        <div className="rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
          <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <CoinsIcon className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">Eco-Friendly NFT Marketplace</h2>
          <p className="text-gray-300 mb-6">
            CarbonX offers a Solana-powered marketplace where eco-NFTs can be traded. Each NFT represents a tangible environmental contribution, providing a unique opportunity for individuals and corporations to support sustainability efforts.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span>Low-cost transactions via Solana</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span>Exclusive eco-friendly NFT collectibles</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              <span>Ability for corporations to bulk-buy NFTs</span>
            </li>
          </ul>
        </div>

        {/* Card 3 - Sustainable Ecosystem */}
        <div className="rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
          <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <Trees className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent">Building a Sustainable Ecosystem</h2>
          <p className="text-gray-300 mb-6">
            CarbonX fosters a sustainable ecosystem where environmental projects can thrive. Through its marketplace, users can make a real impact by supporting carbon offset and conservation efforts directly through NFT purchases.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Enabling companies to offset their carbon emissions</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Impact metrics dashboard for tracking progress</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Direct connection to verified environmental organizations</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  );
};

export default Features;
