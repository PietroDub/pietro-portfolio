"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function CodeFace({
  position,
  rotation,
  lines,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  lines: string[];
}) {
  return (
    <group position={position} rotation={rotation}>
      {lines.map((line, index) => (
        <Text
          key={index}
          position={[-0.75, 0.65 - index * 0.22, 0]}
          fontSize={0.13}
          color="#fff9ee"
          anchorX="left"
          anchorY="middle"
        >
          {line}
        </Text>
      ))}
    </group>
  );
}