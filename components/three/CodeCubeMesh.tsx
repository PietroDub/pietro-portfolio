"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import CodeStructure from "./CodeStructure";

export default function CodeCubeMesh() {
  const cubeRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.y += delta * 0.15;
    cubeRef.current.rotation.x += delta * 0.04;
  });

  return (
    <group ref={cubeRef}>
      <CodeStructure />
    </group>
  );
}