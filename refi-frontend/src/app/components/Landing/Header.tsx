import { Flower } from 'lucide-react';
import WalletConnect from './WalletConnect';

const Header = () => {
  return (
    <div className="border-2 border-gray-900 rounded-full py-5 px-10 w-[800px] mx-auto text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Flower className="text-white" />
          <h1 className="text-xl font-bold">CarbonX</h1>
        </div>

        {/* Navigation Items */}
        <div className="flex gap-10">
          <h1 className="text-xl font-sans cursor-pointer  transition duration-1000">Home</h1>
          <h1 className="text-xl font-sans cursor-pointer">Features</h1>
          <h1 className="text-xl font-sans cursor-pointer">Register Orgs</h1>
        </div>

        {/* Connect Button */}
        <div className="flex items-center gap-2">
          <WalletConnect />
        </div>
      </div>
    </div>
  );
};

export default Header;
