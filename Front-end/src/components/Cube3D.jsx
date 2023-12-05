import { Canvas } from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";

function App() {
    return (
        <Canvas styles={{position:"fixed"}}>
            <ambientLight intensity={0.0} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry args={[3, 3, 3]} color="red"/>
                <meshStandardMaterial />
            </mesh>
            <OrbitControls makeDefault />
        </Canvas>
    );
}

export default App;
