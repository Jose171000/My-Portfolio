import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import style from "../styles/Technologies.module.css";

function Sphere(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    const rotationCenter = { x: 0, y: 0, z: 0 };

    useFrame((state) => {
        const elapsedTime = state.clock.elapsedTime;

        // Calcula la nueva posición del objeto alrededor del punto de rotación
        const radius = props.radious; // Ajusta el radio según tus necesidades
        const angle = elapsedTime * props.velocity; // Ajusta la velocidad de rotación según tus necesidades
        const newX = rotationCenter.x + radius * Math.cos(angle);
        const newY = rotationCenter.y + radius * Math.sin(angle);
        const newZ = rotationCenter.z;

        // Establece la nueva posición y rotación del objeto
        ref.current.position.set(newX, newY, newZ);
        ref.current.rotation.z = elapsedTime;
    });
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => { hover(false) }}>
            <sphereGeometry args={[0.5, 32, 16]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    )

}

function Technologies() {
    return (
        <Canvas style={{position:"fixed"}}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Sphere  radious={2.3} velocity={1/10}/>
            <Sphere radious={4} velocity={2/10}/>
            <Sphere radious={0} velocity={1/10}/>
            <OrbitControls />
        </Canvas>
    )
}

export default Technologies;