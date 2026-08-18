"use client";

import CodeEdge from "./CodeEdge";

const code = {
  horizontal: ["<div>", "const", "=>", "{}", "</div>"],
  vertical: ["{", "useState", "=>", "}"],
  depth: ["//", "React", "TS", "//"],
};

export default function CodeStructure() {
  const s = 1.2;

  return (
    <group>
      {/* ========================= */}
      {/* BACK / FRONT HORIZONTAL */}
      {/* ========================= */}

      <CodeEdge
        start={[-s, s, s]}
        end={[s, s, s]}
        code={code.horizontal}
      />

      <CodeEdge
        start={[-s, -s, s]}
        end={[s, -s, s]}
        code={code.horizontal}
      />

      <CodeEdge
        start={[-s, s, -s]}
        end={[s, s, -s]}
        code={code.horizontal}
      />

      <CodeEdge
        start={[-s, -s, -s]}
        end={[s, -s, -s]}
        code={code.horizontal}
      />

      {/* ========================= */}
      {/* VERTICAL */}
      {/* ========================= */}

      <CodeEdge
        start={[-s, -s, s]}
        end={[-s, s, s]}
        code={code.vertical}
        rotation={[0, 0, Math.PI / 2]}
      />

      <CodeEdge
        start={[s, -s, s]}
        end={[s, s, s]}
        code={code.vertical}
        rotation={[0, 0, Math.PI / 2]}
      />

      <CodeEdge
        start={[-s, -s, -s]}
        end={[-s, s, -s]}
        code={code.vertical}
        rotation={[0, 0, Math.PI / 2]}
      />

      <CodeEdge
        start={[s, -s, -s]}
        end={[s, s, -s]}
        code={code.vertical}
        rotation={[0, 0, Math.PI / 2]}
      />

      {/* ========================= */}
      {/* DEPTH */}
      {/* ========================= */}

      <CodeEdge
        start={[-s, s, -s]}
        end={[-s, s, s]}
        code={code.depth}
        rotation={[0, Math.PI / 2, 0]}
      />

      <CodeEdge
        start={[s, s, -s]}
        end={[s, s, s]}
        code={code.depth}
        rotation={[0, Math.PI / 2, 0]}
      />

      <CodeEdge
        start={[-s, -s, -s]}
        end={[-s, -s, s]}
        code={code.depth}
        rotation={[0, Math.PI / 2, 0]}
      />

      <CodeEdge
        start={[s, -s, -s]}
        end={[s, -s, s]}
        code={code.depth}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}