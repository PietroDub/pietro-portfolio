import { Line } from "@react-three/drei";

export function ConnectionFace() {
  function FaceNode({ position }: { position: [number, number, number] }) {
    return (
      <mesh position={position}>
        <sphereGeometry args={[0.035, 8, 8]} />

        <meshBasicMaterial color="#ff2f3f" />
      </mesh>
    );
  }

  return (
    <group>
      <Line
        points={[
          [-0.75, 0.55, 0],
          [-0.25, 0.55, 0],
          [0.1, 0.25, 0],
          [0.6, 0.25, 0],
        ]}
        color="#ff2f3f"
        lineWidth={1}
        transparent
        opacity={0.65}
      />

      <Line
        points={[
          [-0.6, -0.45, 0],
          [-0.15, -0.45, 0],
          [0.15, -0.15, 0],
          [0.7, -0.15, 0],
        ]}
        color="#ff2f3f"
        lineWidth={1}
        transparent
        opacity={0.5}
      />

      <FaceNode position={[-0.25, 0.55, 0.02]} />
      <FaceNode position={[0.1, 0.25, 0.02]} />
      <FaceNode position={[0.15, -0.15, 0.02]} />
    </group>
  );
}
