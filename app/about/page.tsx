"use client"

import { motion } from "framer-motion"
import Starfield from "@/components/starfield"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-glow">About IRFC</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                IRFC is dedicated to fostering innovation and collaboration in the fields of electronics and software
                research. We bring together brilliant minds from around the world to share knowledge, collaborate on
                cutting-edge projects, and push the boundaries of what's possible in technology.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-lg border border-purple-500/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To create a global community where innovation thrives, where researchers and developers can access
                resources, mentorship, and collaboration opportunities that accelerate breakthrough discoveries and
                technological advancement.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-blue-400">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Research Collaboration</h3>
                <p className="text-gray-300">
                  Connect with researchers worldwide and collaborate on groundbreaking projects.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Knowledge Sharing</h3>
                <p className="text-gray-300">
                  Access cutting-edge research papers, tutorials, and educational resources.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-pink-500/20">
                <h3 className="text-xl font-bold mb-4 text-pink-300">Innovation Support</h3>
                <p className="text-gray-300">
                  Get mentorship, funding opportunities, and technical support for your projects.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
