import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import style from "../styles/Technologies.module.css";
import setPosition from "../functions/positionCamera";

function Sphere(props) {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    const rotationCenter = { x: 0, y: 0, z: props.zIndex };

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
            onClick={(event) => {
                console.log(event.target);
                click(!clicked)
                console.log("hello world");
            }}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => { hover(false) }}>
            <sphereGeometry args={[props.size, 32, 16]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    )

}

function Technologies() {
    return (
        <Canvas className={style.scene} style={{ height: "700px", width: "700px" }}>
            <PerspectiveCamera />
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Sphere key={1} radious={0.7} velocity={1 / 10} zIndex={-1} size={.1} />
            <Sphere key={2} radious={1.2} velocity={2 / 10} zIndex={1} size={.1} />
            <Sphere key={3} radious={1.8} velocity={3 / 10} zIndex={-1.3} size={.1} />
            <Sphere key={4} radious={2.3} velocity={4 / 10} zIndex={-1} size={.1} />
            <Sphere key={5} radious={2.9} velocity={5 / 10} zIndex={-1.6} size={.1} />
            <Sphere key={6} radious={3.6} velocity={1 / 10} zIndex={2} size={.1} />
            <Sphere key={7} radious={4} velocity={2 / 10} zIndex={-2} size={.1} />
            <Sphere key={8} radious={0} velocity={8 / 10} size={.3}/>
            <OrbitControls />
        </Canvas>
    )
}

export default Technologies;