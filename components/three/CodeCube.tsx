"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import CodeCubeMesh from "./CodeCubeMesh";

export default function CodeCube() {
  return (
    <div className="h-[500px] w-1/2">
      <Canvas
        camera={{
          position: [3, 2.5, 4],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[4, 5, 3]}
          intensity={3}
        />

        <CodeCubeMesh />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}