"use client";

import { Text } from "@react-three/drei";

interface CodeEdgeProps {
  start: [number, number, number];
  end: [number, number, number];
  code: string[];
  rotation?: [number, number, number];
}

export default function CodeEdge({
  start,
  end,
  code,
  rotation = [0, 0, 0],
}: CodeEdgeProps) {
  const [x1, y1, z1] = start;
  const [x2, y2, z2] = end;

  const length = code.length;

  return (
    <group>
      {code.map((fragment, index) => {
        const progress =
          length === 1 ? 0 : index / (length - 1);

        const x = x1 + (x2 - x1) * progress;
        const y = y1 + (y2 - y1) * progress;
        const z = z1 + (z2 - z1) * progress;

        return (
          <Text
            key={index}
            position={[x, y, z]}
            rotation={rotation}
            fontSize={0.14}
            color="#ff2f3f"
            anchorX="center"
            anchorY="middle"
          >
            {fragment}
          </Text>
        );
      })}
    </group>
  );
}