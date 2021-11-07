import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./components/Model";
import Drop from "./components/Dropfile";

export default function App() {
  return (
    <div>
      <Canvas style={{height:500,width:600}} >
        <Suspense fallback={null}>
          <Center position={[5, 5, 10]} > 
            <Model />
            </Center>
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
      <Drop/>
    </div>
  );
}