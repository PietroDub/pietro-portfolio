"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import CodeStructure from "./CodeStructure";
import CodeFace from "./CodeFace";

export default function CodeCubeMesh() {
  const mouseGroup = useRef<THREE.Group>(null);
  const rotationGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!mouseGroup.current || !rotationGroup.current) {
      return;
    }

    // Rotação automática
    rotationGroup.current.rotation.y += delta * 0.12;
    rotationGroup.current.rotation.x += delta * 0.03;

    // Movimento do mouse
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.25;

    mouseGroup.current.rotation.x = THREE.MathUtils.lerp(
      mouseGroup.current.rotation.x,
      targetX,
      0.04
    );

    mouseGroup.current.rotation.y = THREE.MathUtils.lerp(
      mouseGroup.current.rotation.y,
      targetY,
      0.04
    );
  });

  return (
    <group ref={mouseGroup}>
      <group ref={rotationGroup}>
        <CodeStructure />

         {/* FRONT */}
        <CodeFace
          position={[0, 0, 1.01]}
          rotation={[0, 0, 0]}
          type="code"
        />

        {/* RIGHT */}
        <CodeFace
          position={[1.01, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          type="connection"
        />

        {/* LEFT */}
        <CodeFace
          position={[-1.01, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          type="symbols"
        />

        {/* TOP */}
        <CodeFace
          position={[0, 1.01, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          type="connection"
        />

        {/* BOTTOM */}
        <CodeFace
          position={[0, -1.01, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          type="symbols"
        />

        {/* BACK */}
        <CodeFace
          position={[0, 0, -1.01]}
          rotation={[0, Math.PI, 0]}
          type="code"
        />
      </group>
    </group>
  );
}