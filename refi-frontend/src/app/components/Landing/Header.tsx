"use client"

import { Flower } from 'lucide-react';
import WalletConnect from './WalletConnect';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
// import SortDropdown from '../marketplace/SortDropdown';

// Dynamically import the TopAlert component
const TopAlert = dynamic(() => import('./TopAlert'), { ssr: false });

const Header = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'price-asc' | 'price-desc' | 'volume-desc'>('recent');

  const handleAlert = (feature: string) => {
    setAlertMessage(`The Feature Will be Live soon!`);
    setTimeout(() => {
      setAlertMessage(null); // Hide alert after 3 seconds
    }, 3000); // You can adjust this timeout duration
  };

  return (
    <div className="border-2 border-gray-900 rounded-full py-5 px-10 w-[800px] mx-auto text-white">
      {/* Top Alert */}
    

      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Flower className="text-white" />
          <h1 className="text-xl font-bold">CarbonX</h1>
        </div>

        {/* Navigation Items */}
        <div className="flex gap-10">
          <h1 className="text-xl font-sans cursor-pointer transition duration-1000">Home</h1>
          <h1
            className="text-xl font-sans cursor-pointer"
            onMouseEnter={() => handleAlert('Register Org')}
          >
            Register Org
          </h1>
          <Link href="/marketplace">
          <h1
            className="text-xl font-sans cursor-pointer"
            >
            Marketplace
          </h1>
            </Link>
        </div>

        {/* Connect Button */}
        <div className="flex items-center gap-2">
          <WalletConnect />
        </div>
      </div>
        {alertMessage && <TopAlert message={alertMessage} />}

      {/* <SortDropdown value={sortBy} onChange={setSortBy} /> */}
    </div>
  );
};

export default Header;
