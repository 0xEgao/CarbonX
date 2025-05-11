"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

interface FormData {
  name: string;
  email: string;
  country: string;
  field: string;
}

const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', email: '', country: '', field: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ name: '', email: '', country: '', field: '' });
    }, 2000);
  };

  return (
    <div className="relative bg-black text-white min-h-[600px] w-full max-w-[1200px] rounded-2xl px-8 py-16 mx-auto">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-black rounded-2xl p-8 w-full max-w-md relative border border-gray-800">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">×</button>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Join the Waitlist</h2>
                <div>
                  <input name="name" value={form.name} onChange={handleChange} required 
                    className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-gray-500" 
                    placeholder="Name" />
                </div>
                <div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required 
                    className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-gray-500" 
                    placeholder="Email" />
                </div>
                <div>
                  <input name="country" value={form.country} onChange={handleChange} required 
                    className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-gray-500" 
                    placeholder="Country" />
                </div>
                <div>
                  <input name="field" value={form.field} onChange={handleChange} required 
                    className="w-full rounded-lg px-4 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-gray-500" 
                    placeholder="Field of Impact (e.g. Forest, Ocean, Air...)" />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-100 transition">
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-lg font-bold mb-2">Thank you for joining!</div>
                <div className="text-gray-400">We'll keep you updated.</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        {/* Left Side - Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Support Environmental Causes
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Donate to verified environmental organizations and receive impact NFTs as proof of your contribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           
            <Link href="#About">
              <button className="border cursor-pointer border-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition">
                  What Differentiates Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://imgs.search.brave.com/zuwWSgySM38k9tNOf4kigHg7a8Yo3QbWs-bU6c6w50c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC8zbW5iZWp6/NHI2eGgvMVdyYVVy/V0M5OWV1NU9HVU5R/Z1VPZS82OThmOWMx/YzdlODQxNzI5NDZl/MTA5NmI3NWVkMTdm/NS9Pdm9scy5qcGc"
              alt="Environmental Impact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="mt-40 pt-20 border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 id="About" className="text-4xl font-bold mb-6 text-white">Donate with Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="block text-xl font-bold mb-4 text-white">*Not another NFT Marketplace</span>
            We're revolutionizing how environmental organizations receive donations. 
            By donating to verified projects, you receive an Impact NFT that represents your contribution to environmental causes. 
            Each NFT is minted only upon donation and represents real environmental impact verified by AI.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[400px]">
          {/* Orbiting NFTs */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <OrbitingCircles radius={180} duration={20}>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/WLtZyiWYNGh6q04ekuQ_agGHHwTp9qyWgtJrAIKqMO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Rp/dmEuYXJ0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzA4L0Et/ZGlnaXRhbC1yZXBs/aWNhLW9mLUxlb25h/cmRvLWRhLVZpbmNp/cy1Qb3J0cmFpdC1v/Zi1hLU11c2ljaWFu/LWluLVVuaXRzLUV0/ZXJuYWxpemluZy1B/cnQtSGlzdG9yeS1l/eGhpYml0aW9uLndl/YnA"
                  alt="Forest Conservation NFT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/QKzO5sfyc7s7yKIN8zEzmkCQLOMWDsjqhynNpmPsUFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMub2t4LmNvbS9j/ZG4vbmZ0L2ZpbGVz/Lzc0YTYzMWIzLTZl/Y2YtNGIyZS1iZTM4/LWMwYjRkY2IxMDhl/Ni53ZWJwL3R5cGU9/bGlzdA"
                  alt="Ocean Cleanup NFT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/QMRPV2RqBkRJmJy8FvrxgvYpi3MXHKvDruYVoxk4Mc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMub2t4LmNvbS9j/ZG4vbmZ0L2ZpbGVz/L2E5MDQzODIxLTM3/NjAtNGViOC05YjVj/LTU3NmRhYmU4ZDM2/OS53ZWJwL3R5cGU9/bGlzdA"
                  alt="Renewable Energy NFT"
                  className="w-full h-full object-cover"
                />
              </div>
            </OrbitingCircles>

            {/* Inner orbit */}
            <OrbitingCircles radius={100} duration={15} reverse>
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/-SXK9ZeFGqPMaFrU6pU09jOI6sua2wuejQCQtmbdPoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ob3dyYXJlLmlz/L25mdF9pbWFnZXMv/bWFkbGFkcy80ZDRh/ZGVjYjRkNTNlYzlk/ZTk4MDc1OTJjYTll/ZjljNy5qcGc"
                  alt="Wildlife Protection NFT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/6Juw8S9hHP9hhAsIyw1JkJYrQxeKrzDJXWxvwPZm-C0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL25m/dF9jb250cmFjdHMv/aW1hZ2VzLzI0Mi9s/YXJnZS8zUjdzLVpW/MF80MDB4NDAwLmpw/Zz8xNzA3Mjg3MjM0"
                  alt="Carbon Offset NFT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/Z4cu-AzTcfGj-jLM7C9EmQc3E4HBj-44LVOqvVTyz90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ob3dyYXJlLmlz/L25mdF9pbWFnZXMv/bWFkbGFkcy85MjEy/MzdkMTJkYzYxZWY0/NjAzY2I3ZmUwODEx/ZDlkNC5qcGc"
                  alt="Sustainable Agriculture NFT"
                  className="w-full h-full object-cover"
                />
              </div>
            </OrbitingCircles>
          </div>

          {/* Feature Cards */}
          <div className="absolute bottom-[-170px] left-0 right-0 flex justify-center gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Register Organization</h3>
              <p className="text-gray-400 text-sm">Create your profile and start receiving donations</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Impact Verification</h3>
              <p className="text-gray-400 text-sm">AI-powered verification of environmental impact</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <h3 className="text-white font-semibold mb-2">Donate & Impact</h3>
              <p className="text-gray-400 text-sm">Support causes and receive proof of impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
