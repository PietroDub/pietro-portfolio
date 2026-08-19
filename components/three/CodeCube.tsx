"use client";

import { Canvas } from "@react-three/fiber";
import CodeCubeMesh from "./CodeCubeMesh";

export default function CodeCube() {
  return (
    <div className="hidden h-[500px] w-1/2 items-center justify-center md:flex">
      <Canvas
        className="h-full w-full"
        camera={{
          position: [3.5, 3, 5],
          fov: 42,
        }}
      >
        <CodeCubeMesh />
      </Canvas>
    </div>
  );
}

