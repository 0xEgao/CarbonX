"use client";
import { FaXTwitter, FaDiscord, FaLinkedin, FaReddit } from "react-icons/fa6";
import Image from "next/image";
import Favicon from "../../favicon.ico";

export default function Footer() {
  return (
    <footer className="text-sm text-gray-400 py-10 px-6 md:px-20 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
        {/* Left: Logo and Copyright */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src={Favicon}
              alt="CarbonX Logo"
              width={24}
              height={24}
              className="invert"
            />
            <span className="text-white font-semibold text-lg">CarbonX</span>
          </div>
          <div className="space-x-4 text-xs">
            <span className="hover:text-white transition duration-300">CarbonX Exchange © 2025</span>
            <span className="hover:text-white transition duration-300">Legal</span>
            <span className="hover:text-white transition duration-300">Privacy</span>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex space-x-16">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li className="hover:text-white transition duration-300">About</li>
              <li className="hover:text-white transition duration-300">Careers</li>
              <li className="hover:text-white transition duration-300">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Help & Support</h3>
            <ul className="space-y-1">
              <li className="hover:text-white transition duration-300">Learn</li>
              <li className="hover:text-white transition duration-300">Guide</li>
              <li className="hover:text-white transition duration-300">Support</li>
              <li className="hover:text-white transition duration-300">Documentation</li>
            </ul>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-4">
          <FaXTwitter className="text-gray-400 hover:text-white transition duration-300" size={18} />
          <FaDiscord className="text-gray-400 hover:text-white transition duration-300" size={18} />
          <FaLinkedin className="text-gray-400 hover:text-white transition duration-300" size={18} />
          <FaReddit className="text-gray-400 hover:text-white transition duration-300" size={18} />
        </div>
      </div>
    </footer>
  );
}
