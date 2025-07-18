"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Starfield from "@/components/starfield"

export default function CommunitiesPage() {
  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-glow">Explore Communities</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join specialized communities focused on cutting-edge research and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Link href="/communities/eirf">
            <motion.div
              className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">EIRF</h2>
              <h3 className="text-xl mb-4 text-blue-300">Electronics Innovation Research Forum</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dive deep into the world of electronics innovation. From IoT devices and embedded systems to advanced
                circuit design and hardware optimization, EIRF is where electronics enthusiasts and professionals
                collaborate on the future of hardware technology.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  IoT & Embedded Systems
                </div>
                <div className="flex items-center text-sm text-blue-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Circuit Design & PCB Development
                </div>
                <div className="flex items-center text-sm text-blue-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Hardware Security & Testing
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/communities/sirf">
            <motion.div
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 cursor-pointer h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-400">SIRF</h2>
              <h3 className="text-xl mb-4 text-purple-300">Software Innovation Research Forum</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore the cutting edge of software development and computer science. From artificial intelligence and
                machine learning to distributed systems and quantum computing, SIRF brings together software innovators
                pushing the boundaries of what's possible.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  AI & Machine Learning
                </div>
                <div className="flex items-center text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Distributed Systems & Cloud
                </div>
                <div className="flex items-center text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Quantum Computing & Algorithms
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
