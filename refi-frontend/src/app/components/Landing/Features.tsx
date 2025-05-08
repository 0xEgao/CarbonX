"use client";
import { motion } from "framer-motion";
import { FileCheck, Heart, Gift, UserPlus, Image as ImageIcon } from "lucide-react";

export default function Features() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Support Environmental Causes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A transparent donation platform connecting you with verified environmental organizations making real impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-6 rounded-xl h-full flex flex-col"
          >
            <UserPlus className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">1. Organization Registration</h3>
            <p className="text-gray-400 text-sm">
              Environmental organizations register and submit their projects for verification
            </p>
            <ul className="mt-auto space-y-2 text-sm text-gray-400">
              <li>• Project details submission</li>
              <li>• Impact documentation</li>
              <li>• Organization verification</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 p-6 rounded-xl h-full flex flex-col"
          >
            <FileCheck className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">2. Verification Process</h3>
            <p className="text-gray-400 text-sm">
              Rigorous verification of environmental impact and project feasibility
            </p>
            <ul className="mt-auto space-y-2 text-sm text-gray-400">
              <li>• Impact assessment</li>
              <li>• Project validation</li>
              <li>• Environmental metrics</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900 p-6 rounded-xl h-full flex flex-col"
          >
            <ImageIcon className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">3. Project Showcase</h3>
            <p className="text-gray-400 text-sm">
              Organizations showcase their projects with visual representation and impact details
            </p>
            <ul className="mt-auto space-y-2 text-sm text-gray-400">
              <li>• Project imagery</li>
              <li>• Impact details</li>
              <li>• Donation goals</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900 p-6 rounded-xl h-full flex flex-col"
          >
            <Heart className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">4. Donation Process</h3>
            <p className="text-gray-400 text-sm">
              Simple and transparent donation process with impact tracking
            </p>
            <ul className="mt-auto space-y-2 text-sm text-gray-400">
              <li>• Easy contribution</li>
              <li>• Impact tracking</li>
              <li>• Project updates</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-900 p-6 rounded-xl h-full flex flex-col"
          >
            <Gift className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">5. Impact Recognition</h3>
            <p className="text-gray-400 text-sm">
              Receive a unique NFT as proof of your contribution and impact
            </p>
            <ul className="mt-auto space-y-2 text-sm text-gray-400">
              <li>• Contribution proof</li>
              <li>• Impact certificate</li>
              <li>• Project updates</li>
            </ul>
          </motion.div>
        </div>

        {/* Impact Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Support These Causes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Solar Energy", "Air Quality", "Water Conservation", "Wind Power", "Forest Protection"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full text-sm text-white cursor-pointer transition-colors"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 