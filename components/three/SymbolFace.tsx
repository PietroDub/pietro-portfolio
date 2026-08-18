import { Text } from "@react-three/drei";

export function SymbolFace() {
  return (
    <group>
      <Text
        position={[-0.55, 0.45, 0]}
        fontSize={0.2}
        color="#ff2f3f"
      >
        {"<>"}
      </Text>

      <Text
        position={[0.35, 0.25, 0]}
        fontSize={0.18}
        color="#ff2f3f"
      >
        {"{}"}
      </Text>

      <Text
        position={[-0.25, -0.1, 0]}
        fontSize={0.2}
        color="#ff2f3f"
      >
        {"=>"}
      </Text>

      <Text
        position={[0.45, -0.45, 0]}
        fontSize={0.18}
        color="#ff2f3f"
      >
        {"()"}
      </Text>
    </group>
  );
}