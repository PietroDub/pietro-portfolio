export default function RetanguloComProfundidade() {
    return (
        <mesh position={[0, 0, 0]}>
            {/* 
              Parâmetros do BoxGeometry: (largura, altura, profundidade)
              Exemplo: Largura 2, Altura 1, Profundidade 0.1 (uma placa fina)
            */}
            <boxGeometry args={[3, 3, 0.2]} />
            
            {/* Um material básico para conseguirmos enxergar a cor e a luz */}
            <meshStandardMaterial color="#ff2f3f" roughness={0.3} />
        </mesh>
    );
}