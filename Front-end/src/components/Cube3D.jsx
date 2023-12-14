import { Canvas} from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";

function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.0} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry args={[3, 3, 3]} color="black"/>
                <meshStandardMaterial />
            </mesh>
            <OrbitControls makeDefault />
        </Canvas>
    );
}

export default App;
