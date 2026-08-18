import { CodeFaceContent } from "./CodeFaceContent";
import { ConnectionFace } from "./ConnectionFace";
import { SymbolFace } from "./SymbolFace";

interface CodeFaceProps {
  position: [number, number, number];
  rotation: [number, number, number];
  type: "code" | "connection" | "symbols";
}

export default function CodeFace({
  position,
  rotation,
  type,
}: CodeFaceProps) {
  return (
    <group position={position} rotation={rotation}>
      {type === "code" && <CodeFaceContent />}

      {type === "connection" && <ConnectionFace />}

      {type === "symbols" && <SymbolFace />}
    </group>
  );
}