"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!sphereRef.current) return;
    
    // Rotate slowly
    sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    
    // Slight follow to mouse (parallax effect within the canvas)
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    sphereRef.current.rotation.y += 0.05 * (targetX - sphereRef.current.rotation.y);
    sphereRef.current.rotation.x += 0.05 * (targetY - sphereRef.current.rotation.x);
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5} position={[2.5, 0, 0]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.9}
        transmission={0.9}
        ior={1.5}
        thickness={0.5}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
