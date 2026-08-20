"use client";

import { Text, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const codeLines = [
  'const developer = {',
  '  name: "Pietro Vito",',
  '  stack: ["Next.js", "C#", ".NET", "React", "TS"],',
  '  passion: "building things",',
  '  status: "available",',
  "};",
];

export default function Terminal3D() {
  const terminalRef = useRef<THREE.Group>(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  /*
   * Efeito de "digitação"
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((current) => {
        if (current >= codeLines.length) {
          clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  /*
   * Cursor piscando
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((current) => !current);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  /*
   * Movimento 3D + mouse
   */
  useFrame((state, delta) => {
    if (!terminalRef.current) return;

    /*
     * Rotação automática bem suave
     */
    terminalRef.current.rotation.y += delta * 0.08;

    /*
     * Movimento do mouse
     */
    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.2;

    terminalRef.current.rotation.x = THREE.MathUtils.lerp(
      terminalRef.current.rotation.x,
      targetX,
      0.04,
    );

    terminalRef.current.rotation.y = THREE.MathUtils.lerp(
      terminalRef.current.rotation.y,
      targetY,
      0.04,
    );

    /*
     * Pequena flutuação
     */
    terminalRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
  });

  return (
    <group ref={terminalRef}>

      {/* ===================================== */}
      {/* CORPO DO TERMINAL */}
      {/* ===================================== */}

      <mesh>
        <boxGeometry args={[3.4, 2.6, 0.28]} />

        <meshStandardMaterial
          color="#8f1111"
          roughness={0.45}
          metalness={0.15}
        />
      </mesh>


      {/* ===================================== */}
      {/* TELA */}
      {/* ===================================== */}

      <mesh position={[0, 0, 0.151]}>
        <planeGeometry args={[3.15, 2.35]} />

        <meshStandardMaterial
          color="#ff2f3f"
          roughness={0.7}
        />
      </mesh>


      {/* ===================================== */}
      {/* BORDA DA TELA */}
      {/* ===================================== */}

      <Line
        points={[
          [-1.575, -1.175, 0.16],
          [1.575, -1.175, 0.16],
          [1.575, 1.175, 0.16],
          [-1.575, 1.175, 0.16],
          [-1.575, -1.175, 0.16],
        ]}
        color="#ff2f3f"
        lineWidth={2}
      />


      {/* ===================================== */}
      {/* BARRA SUPERIOR */}
      {/* ===================================== */}

      <mesh position={[0, 0.91, 0.18]}>
        <planeGeometry args={[3.05, 0.32]} />

        <meshBasicMaterial color="#8f1111" />
      </mesh>


      {/* ===================================== */}
      {/* LEDS */}
      {/* ===================================== */}

      <mesh position={[-1.25, 0.91, 0.2]}>
        <circleGeometry args={[0.07, 16]} />
        <meshBasicMaterial color="#ff2f3f" />
      </mesh>

      <mesh position={[-1.05, 0.91, 0.2]}>
        <circleGeometry args={[0.07, 16]} />
        <meshBasicMaterial color="#ff2f3f" />
      </mesh>

      <mesh position={[-0.85, 0.91, 0.2]}>
        <circleGeometry args={[0.07, 16]} />
        <meshBasicMaterial color="#ff2f3f" />
      </mesh>


      {/* ===================================== */}
      {/* NOME DO TERMINAL */}
      {/* ===================================== */}

      <Text
        position={[0.65, 0.91, 0.2]}
        fontSize={0.11}
        color="#fff9ee"
        anchorX="center"
        anchorY="middle"
      >
        pietro@portfolio
      </Text>


      {/* ===================================== */}
      {/* CÓDIGO */}
      {/* ===================================== */}

      <group position={[-1.25, 0.55, 0.2]}>

        {codeLines.slice(0, visibleLines).map((line, index) => (
          <Text
            key={index}
            position={[0, -index * 0.27, 0]}
            fontSize={0.13}
            color="#120607"
            anchorX="left"
            anchorY="middle"
          >
            {line}
          </Text>
        ))}

        {/* Cursor */}
        {visibleLines >= codeLines.length && (
          <Text
            position={[0, -codeLines.length * 0.27, 0]}
            fontSize={0.15}
            color={cursorVisible ? "#ff2f3f" : "#1a1112"}
            anchorX="left"
            anchorY="middle"
          >
            ▋
          </Text>
        )}

      </group>

    </group>
  );
}