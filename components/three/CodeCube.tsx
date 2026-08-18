"use client";

import { Canvas } from "@react-three/fiber";
import CodeCubeMesh from "./CodeCubeMesh";

export default function CodeCube() {
  return (
    <div className="h-[500px] w-full">
      <Canvas
        camera={{
          position: [3.2, 2.5, 4.5],
          fov: 40,
        }}
      >
        {/* Iluminação */}
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={2}
        />

        <pointLight
          position={[-3, 2, 3]}
          color="#ff2f3f"
          intensity={5}
        />

        {/* Cubo */}
        <CodeCubeMesh />
      </Canvas>
    </div>
  );
}