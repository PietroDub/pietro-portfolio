"use client";

import { Text } from "@react-three/drei";

const code = [
  "<section>",
  "const app = createApp()",
  "return (",
  "  <Hero />",
  ")",
  "</section>",
];

export default function CodeStructure() {
  return (
    <group>
      {/* FRONT */}
      {code.map((line, index) => (
        <Text
          key={`front-${index}`}
          position={[
            -0.85,
            0.75 - index * 0.25,
            1,
          ]}
          fontSize={0.12}
          color="#ff2f3f"
          anchorX="left"
          anchorY="middle"
        >
          {line}
        </Text>
      ))}

      {/* RIGHT */}
      {code.map((line, index) => (
        <Text
          key={`right-${index}`}
          position={[
            1,
            0.75 - index * 0.25,
            0.85,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={0.12}
          color="#ff2f3f"
          anchorX="left"
          anchorY="middle"
        >
          {line}
        </Text>
      ))}
    </group>
  );
}