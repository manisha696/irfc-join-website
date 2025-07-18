"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Starfield from "@/components/starfield"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Box } from "@react-three/drei"

function ElectronicsVisualization() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Circuit board representation */}
      <Box args={[3, 0.1, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a4d3a" />
      </Box>

      {/* Electronic components */}
      <Sphere args={[0.2]} position={[-1, 0.2, -0.5]}>
        <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.15]} position={[0.5, 0.2, 0.3]}>
        <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere args={[0.1]} position={[1, 0.2, -0.2]}>
        <meshStandardMaterial color="#10b981" emissive="#059669" emissiveIntensity={0.3} />
      </Sphere>
    </Canvas>
  )
}

export default function EIRFPage() {
  const projects = [
    {
      title: "Smart IoT Sensor Network",
      description: "Advanced sensor network for environmental monitoring with edge computing capabilities.",
      
    },
    {
      title: "Quantum Circuit Optimization",
      description: "Novel approaches to optimizing quantum circuits for better performance and reduced noise.",
     
    },
    {
      title: "Neuromorphic Computing Chip",
      description: "Brain-inspired computing architecture for ultra-low power AI applications.",
      
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400 text-glow">EIRF</h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white">Electronics Innovation Research Forum</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of electronics innovation through collaborative research and development
          </p>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          className="h-64 mb-16 rounded-lg overflow-hidden border border-blue-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ElectronicsVisualization />
        </motion.div>

        {/* Community Goals */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Our Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4 text-blue-300">IoT & Embedded Systems</h4>
              <p className="text-gray-300">
                Developing next-generation IoT devices and embedded systems for smart cities, healthcare, and industrial
                applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4 text-blue-300">Circuit Design & PCB</h4>
              <p className="text-gray-300">
                Advanced circuit design methodologies, PCB optimization, and high-frequency electronics for modern
                applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4 text-blue-300">Hardware Security</h4>
              <p className="text-gray-300">
                Researching hardware-based security solutions, secure boot processes, and protection against physical
                attacks.
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
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Latest Innovations</h3>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-black/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-400 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h4>
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join EIRF Community
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
