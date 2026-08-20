"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import RetanguloComProfundidade from "./MainTerminal";

export default function Terminal() {
    return (
        <div className="hidden h-[500px] w-full items-center justify-center md:flex">
            <Canvas
                className="h-full w-full"
                camera={{
                    position: [3.5, 3, 5],
                    fov: 42,
                }}
            >
                {/* Luzes para o material Standard funcionar bem */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} />

                {/* Seu componente de retângulo */}
                <RetanguloComProfundidade />

                {/* Opcional: para você conseguir girar a câmera e ver a profundidade
                <OrbitControls /> */}
            </Canvas>
        </div>
    );
}