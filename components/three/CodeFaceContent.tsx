import { Text } from "@react-three/drei";

export function CodeFaceContent() {
  return (
    <group>
      <Text
        position={[-0.7, 0.45, 0]}
        fontSize={0.15}
        color="#ff2f3f"
        anchorX="left"
      >
        const app =
      </Text>

      <Text
        position={[-0.55, 0.2, 0]}
        fontSize={0.15}
        color="#ff2f3f"
        anchorX="left"
      >
        createApp()
      </Text>

      <Text
        position={[-0.7, -0.1, 0]}
        fontSize={0.15}
        color="#ff2f3f"
        anchorX="left"
      >
        function init()
      </Text>

      <Text
        position={[-0.55, -0.35, 0]}
        fontSize={0.15}
        color="#ff2f3f"
        anchorX="left"
      >
        {"return <Hero />"}
      </Text>
    </group>
  );
}