import { Flower } from 'lucide-react';

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
          <h1 className="text-xl font-sans cursor-pointer">Pricing</h1>
        </div>

        {/* Connect Button */}
        <button className="text-xl text-white cursor-pointer hover:bg-purple-700 font-sans py-2 px-5 rounded-xl bg-purple-800 transition duration-500">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
