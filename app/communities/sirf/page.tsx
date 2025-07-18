"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Starfield from "@/components/starfield"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Torus } from "@react-three/drei"

function SoftwareVisualization() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Neural network representation */}
      <Sphere args={[0.3]} position={[-2, 1, 0]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.3]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.3]} position={[2, 1, 0]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.3} />
      </Sphere>

      <Sphere args={[0.3]} position={[-1, -1, 0]}>
        <meshStandardMaterial color="#ec4899" emissive="#db2777" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.3]} position={[1, -1, 0]}>
        <meshStandardMaterial color="#ec4899" emissive="#db2777" emissiveIntensity={0.3} />
      </Sphere>

      {/* Data flow representation */}
      <Torus args={[1.5, 0.05]} position={[0, 0, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.5} />
      </Torus>
    </Canvas>
  )
}

export default function SIRFPage() {
  const projects = [
    {
      title: "Quantum Machine Learning Framework",
      description: "A comprehensive framework for implementing quantum machine learning algorithms on NISQ devices.",
      
    },
    {
      title: "Distributed AI Training Platform",
      description: "Scalable platform for training large language models across distributed computing clusters.",
     
    },
    {
      title: "Blockchain-based Identity System",
      description: "Decentralized identity management system using zero-knowledge proofs for privacy preservation.",
    
    },
  ]

  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400 text-glow">SIRF</h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white">Software Innovation Research Forum</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advancing the frontiers of software engineering, AI, and computational sciences
          </p>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          className="h-64 mb-16 rounded-lg overflow-hidden border border-purple-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SoftwareVisualization />
        </motion.div>

        {/* Community Goals */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">Our Research Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-bold mb-4 text-purple-300">AI & Machine Learning</h4>
              <p className="text-gray-300">
                Developing advanced AI algorithms, neural architectures, and machine learning frameworks for real-world
                applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-bold mb-4 text-purple-300">Distributed Systems</h4>
              <p className="text-gray-300">
                Building scalable, fault-tolerant distributed systems and cloud-native architectures for modern
                applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-bold mb-4 text-purple-300">Quantum Computing</h4>
              <p className="text-gray-300">
                Exploring quantum algorithms, quantum software development, and hybrid classical-quantum computing
                systems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Latest Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">Latest Innovations</h3>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-black/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>  {project.author}</span>
                  <span>{project.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/join">
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join SIRF Community
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
