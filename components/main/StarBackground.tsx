"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  
  // Generate particles once and validate data
  const [particles] = useState(() => {
    // Generate the particles in a sphere
    const generatedParticles = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    // Replace NaN values with zero or other valid numbers
    for (let i = 0; i < generatedParticles.length; i++) {
      if (isNaN(generatedParticles[i])) {
        generatedParticles[i] = 0; // Replace NaN with 0 or another number
      }
    }

    return generatedParticles;
  });

  // Animate the particles to move outward and pulse
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (ref.current) {
      // Update the particles position directly
      ref.current.position.z = Math.sin(time * 0.5) * 2;
      ref.current.position.x = Math.cos(time * 0.2) * 0.5;

      // Apply pulse effect for particles' size
      ref.current.scale.set(
        1 + Math.sin(time * 0.5) * 0.3, // Scale oscillates
        1 + Math.sin(time * 0.5) * 0.3,
        1 + Math.sin(time * 0.5) * 0.3
      );
    }
  });

  return (
    <group>
      <Points
        ref={ref}
        positions={particles}
        stride={3} // Controls how many values are used for a point
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ff5f1f"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const CreativeCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[5]"> 
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 2]} intensity={0.5} />
      <StarBackground />
      <Preload all />
    </Canvas>
  </div>
);


export default CreativeCanvas;
