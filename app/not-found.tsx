"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Starfield from "@/components/starfield"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"

function FloatingAstronaut() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Astronaut representation */}
      <group>
        {/* Helmet */}
        <Sphere args={[0.8]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#e5e7eb" transparent opacity={0.8} />
        </Sphere>
        {/* Body */}
        <Sphere args={[0.6, 16, 8]} position={[0, 0, 0]} scale={[1, 1.5, 1]}>
          <meshStandardMaterial color="#f3f4f6" />
        </Sphere>
        {/* Arms */}
        <Sphere args={[0.3, 8, 8]} position={[-1, 0.2, 0]} scale={[2, 0.5, 0.5]}>
          <meshStandardMaterial color="#f3f4f6" />
        </Sphere>
        <Sphere args={[0.3, 8, 8]} position={[1, 0.2, 0]} scale={[2, 0.5, 0.5]}>
          <meshStandardMaterial color="#f3f4f6" />
        </Sphere>
        {/* Legs */}
        <Sphere args={[0.3, 8, 8]} position={[-0.3, -1.2, 0]} scale={[0.5, 2, 0.5]}>
          <meshStandardMaterial color="#f3f4f6" />
        </Sphere>
        <Sphere args={[0.3, 8, 8]} position={[0.3, -1.2, 0]} scale={[0.5, 2, 0.5]}>
          <meshStandardMaterial color="#f3f4f6" />
        </Sphere>
      </group>
    </Canvas>
  )
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen pt-20">
      <Starfield />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-blue-400 text-glow">404</h1>
            <h2 className="text-2xl md:text-4xl mb-4 text-white">Lost in Space</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Looks like you've drifted into uncharted territory. The page you're looking for doesn't exist in our
              galaxy.
            </p>
          </motion.div>

          <motion.div
            className="h-64 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FloatingAstronaut />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 glow-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Return to Earth
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
