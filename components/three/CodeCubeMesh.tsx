"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import CodeFace from "./CodeFaces";

export default function CodeCubeMesh() {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.y += delta * 0.25;
    cubeRef.current.rotation.x += delta * 0.08;
  });

  return (
    <group>
      <mesh ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />

        <meshStandardMaterial
          color="#ff2f3f"
          roughness={0.7}
          metalness={0.05}
        />
      </mesh>

      <CodeFace
        position={[0, 0, 1]}
        rotation={[0, 0, 0]}
        lines={[
          "function hello() {",
          "  console.log('Hello, World!');",
          "}"
        ]}
      />
    </group>
  );
}