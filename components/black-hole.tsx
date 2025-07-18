"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import { extend } from "@react-three/fiber"

const BlackHoleMaterial = shaderMaterial(
  {
    time: 0,
    clickPosition: new THREE.Vector2(0, 0),
    clickIntensity: 0,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec2 clickPosition;
    uniform float clickIntensity;
    varying vec2 vUv;
    
    void main() {
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(vUv, center);
      
      // Black hole effect
      float hole = 1.0 - smoothstep(0.0, 0.3, dist);
      float ring = smoothstep(0.3, 0.5, dist) * (1.0 - smoothstep(0.5, 0.8, dist));
      
      // Rotation effect
      float angle = atan(vUv.y - center.y, vUv.x - center.x) + time * 2.0;
      float spiral = sin(angle * 8.0 + dist * 20.0 - time * 5.0) * 0.5 + 0.5;
      
      // Click bloom effect
      float clickDist = distance(vUv, clickPosition);
      float bloom = clickIntensity * exp(-clickDist * 10.0);
      
      vec3 color = vec3(0.0);
      color += vec3(0.1, 0.3, 1.0) * ring * spiral;
      color += vec3(0.5, 0.8, 1.0) * bloom;
      
      gl_FragColor = vec4(color, hole + ring + bloom);
    }
  `,
)

extend({ BlackHoleMaterial })

function BlackHoleGeometry({ onHoleClick }: { onHoleClick: (position: THREE.Vector2) => void }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)
  const { camera, raycaster, pointer } = useThree()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime
    }
  })

  const handleClick = (event: any) => {
    if (meshRef.current && materialRef.current) {
      const intersect = event.intersections[0]
      if (intersect) {
        const uv = intersect.uv
        materialRef.current.clickPosition = new THREE.Vector2(uv.x, uv.y)
        materialRef.current.clickIntensity = 1.0

        // Fade out the click effect
        const fadeOut = () => {
          if (materialRef.current.clickIntensity > 0) {
            materialRef.current.clickIntensity *= 0.95
            requestAnimationFrame(fadeOut)
          }
        }
        fadeOut()

        onHoleClick(new THREE.Vector2(uv.x, uv.y))
      }
    }
  }

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]} onClick={handleClick}>
      <blackHoleMaterial ref={materialRef} transparent />
    </Sphere>
  )
}

export default function BlackHole({ onHoleClick }: { onHoleClick: (position: THREE.Vector2) => void }) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <BlackHoleGeometry onHoleClick={onHoleClick} />
      </Canvas>
    </div>
  )
}
