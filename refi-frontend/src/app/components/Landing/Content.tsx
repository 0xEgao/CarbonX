



import Image from "next/image";
import PurpleBlob from "./PurpleBlob";
import content from "../../utils/imgs/content.png";
import { File, Settings, Search } from "lucide-react";
    
const Content = () => {
  return (
    <div className="relative bg-black text-white rounded-2xl px-16 py-40 w-[1800px] mx-auto overflow-hidden">
      {/* Purple Background Blobs */}
      <PurpleBlob className="top-[-50px] right-[-100px]" />
      {/* <PurpleBlob className="bottom-[-50px] left-[-100px] rotate-180" /> */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-700 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-700 rounded-full blur-3xl opacity-50"></div>

      {/* 2-Column Layout */}
      <div className="flex justify-between items-center  relative">
        {/* Left Side - Text + Buttons */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-6">
            Incentivize your Carbon Offsets
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            Do carbon offsetting by funding environment related projects.
          </p>
          <div className="flex gap-5">
            <button className="bg-green-500 cursor-pointer text-black font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition">
              Get started
            </button>
            <button className="bg-gray-800 cursor-pointer text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition">
              How it works
            </button>
          </div>
        </div>

      
           
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Content;
