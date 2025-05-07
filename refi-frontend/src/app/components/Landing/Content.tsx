"use client";

import PurpleBlob from "./PurpleBlob";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Link from "next/link";
import { useState } from "react";

// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://nedbolwpdafcuctkqyya.supabase.co'
// const supabaseKey : any = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey);

const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', country: '', field: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionally: send to Supabase or show a success message
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ name: '', email: '', country: '', field: '' });
    }, 2000);
  };

  return (
    <div className="relative bg-black text-white h-[600px] w-full max-w-[1800px] rounded-2xl px-16 py-20 mx-auto overflow-hidden">
      {/* Modal Backdrop & Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold">×</button>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">Join the Waitlist</h2>
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg px-4 py-2 bg-black/40 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg px-4 py-2 bg-black/40 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Country</label>
                  <input name="country" value={form.country} onChange={handleChange} required className="w-full rounded-lg px-4 py-2 bg-black/40 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Field of Impact</label>
                  <input name="field" value={form.field} onChange={handleChange} required placeholder="e.g. Forest, Ocean, Air..." className="w-full rounded-lg px-4 py-2 bg-black/40 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <button type="submit" className="w-full cursor-pointers py-3 rounded-lg bg-white text-black font-bold hover:from-green-600 hover:to-purple-700 transition">Submit</button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-lg font-bold mb-2">Thank you for joining the waitlist!</div>
                <div className="text-gray-400">We'll keep you updated.</div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Enhanced Purple Background Blobs */}
      <PurpleBlob className="top-[-100px] right-[-150px] scale-125" />
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-700 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-700 rounded-full blur-3xl opacity-50"></div>

      {/* 2-Column Layout (Text Left, Orbit Right) */}
      <div className="flex justify-between items-center h-full">
        {/* Left Side - Text + Buttons */}
        <div className="max-w-xl w-1/2 text-left z-10">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Incentivize your Carbon Offsets
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Do carbon offsetting by funding environment related projects.
          </p>
          <div className="flex gap-5">
            <button onClick={() => setShowModal(true)} className="bg-green-500 cursor-pointer text-black font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition transform ">
                Join the Waitlist
            </button>
            <Link href="#features">
            <button className="bg-gray-800 cursor-pointer text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-700 transition border border-gray-700 transform ">
              How it works
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side - NFT Orbit */}
        <div className="w-1/2 h-full flex items-center justify-center relative z-10">
          <div className="relative w-[300px] h-[200px] mt-20 ml-40">
            {/* Larger outer orbit */}
            <OrbitingCircles radius={180} duration={20}>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/zuwWSgySM38k9tNOf4kigHg7a8Yo3QbWs-bU6c6w50c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC8zbW5iZWp6/NHI2eGgvMVdyYVVy/V0M5OWV1NU9HVU5R/Z1VPZS82OThmOWMx/YzdlODQxNzI5NDZl/MTA5NmI3NWVkMTdm/NS9Pdm9scy5qcGc"
                  alt="NFT 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/QKzO5sfyc7s7yKIN8zEzmkCQLOMWDsjqhynNpmPsUFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMub2t4LmNvbS9j/ZG4vbmZ0L2ZpbGVz/Lzc0YTYzMWIzLTZl/Y2YtNGIyZS1iZTM4/LWMwYjRkY2IxMDhl/Ni53ZWJwL3R5cGU9/bGlzdA"
                  alt="NFT 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
                <img
                  src="https://imgs.search.brave.com/QMRPV2RqBkRJmJy8FvrxgvYpi3MXHKvDruYVoxk4Mc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMub2t4LmNvbS9j/ZG4vbmZ0L2ZpbGVz/L2E5MDQzODIxLTM3/NjAtNGViOC05YjVj/LTU3NmRhYmU4ZDM2/OS53ZWJwL3R5cGU9/bGlzdA"
                  alt="NFT 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </OrbitingCircles>

            {/* Smaller inner orbit (reverse direction) */}
            <OrbitingCircles radius={100} duration={15} reverse>
  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
    <img
      src="https://imgs.search.brave.com/-SXK9ZeFGqPMaFrU6pU09jOI6sua2wuejQCQtmbdPoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ob3dyYXJlLmlz/L25mdF9pbWFnZXMv/bWFkbGFkcy80ZDRh/ZGVjYjRkNTNlYzlk/ZTk4MDc1OTJjYTll/ZjljNy5qcGc"
      alt="NFT 4"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
    <img
      src="https://imgs.search.brave.com/6Juw8S9hHP9hhAsIyw1JkJYrQxeKrzDJXWxvwPZm-C0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2lu/LWltYWdlcy5jb2lu/Z2Vja28uY29tL25m/dF9jb250cmFjdHMv/aW1hZ2VzLzI0Mi9s/YXJnZS8zUjdzLVpW/MF80MDB4NDAwLmpw/Zz8xNzA3Mjg3MjM0"
      alt="NFT 5"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg shadow-purple-500/30 transform hover:scale-110 transition">
    <img
      src="https://imgs.search.brave.com/Z4cu-AzTcfGj-jLM7C9EmQc3E4HBj-44LVOqvVTyz90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ob3dyYXJlLmlz/L25mdF9pbWFnZXMv/bWFkbGFkcy85MjEy/MzdkMTJkYzYxZWY0/NjAzY2I3ZmUwODEx/ZDlkNC5qcGc"
      alt="NFT 6"
      className="w-full h-full object-cover"
    />
  </div>
</OrbitingCircles>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
          </div>
          <div className="absolute bottom-0  right-[-200px] transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-100  ">
              Mint and Trade Exclusive NFTs
            </h2>
          </div>
        </div>
      </div>
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  );
};

export default Content;
