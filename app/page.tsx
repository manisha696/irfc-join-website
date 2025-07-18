"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import BlackHole from "@/components/black-hole"
import Starfield from "@/components/starfield"
import type * as THREE from "three"

export default function HomePage() {
  const [showCommunities, setShowCommunities] = useState(false)

  const handleBlackHoleClick = (position: THREE.Vector2) => {
    // Trigger bloom effect and show communities
    setShowCommunities(true)
  }

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <BlackHole onHoleClick={handleBlackHoleClick} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-glow">Innovation Research</h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-blue-400">Forum & Community</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join the future of innovation research. Explore cutting-edge projects in electronics and software
            development.
          </p>
        </motion.div>

        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 glow-effect"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={() => setShowCommunities(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Communities
        </motion.button>

        {showCommunities && (
          <motion.div
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/communities/eirf">
              <motion.div
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400">EIRF</h3>
                <p className="text-lg mb-4">Electronics Innovation Research Forum</p>
                <p className="text-gray-300">
                  Explore the latest in electronics, IoT, embedded systems, and hardware innovation.
                </p>
              </motion.div>
            </Link>

            <Link href="/communities/sirf">
              <motion.div
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">SIRF</h3>
                <p className="text-lg mb-4">Software Innovation Research Forum</p>
                <p className="text-gray-300">
                  Dive into AI, machine learning, web development, and software architecture.
                </p>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
