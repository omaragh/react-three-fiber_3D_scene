import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,useProgress, Html } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Item =(props)=>{
    const gltf = useLoader(GLTFLoader, "./Xbot.glb")

    return(
        <>
            <primitive object={gltf.scene} />
        </>
    )
}
export default function LoadAllCanvas(props){
    
    function Loader(){
        const {progress} = useProgress();
        return <Html center style={{color: "red"}}> {progress} % loaded</Html>
      }
    return(
        <div>
            <Canvas >
                <Suspense fallback={<Loader/>}>
                <ambientLight />
                <Environment preset="sunset" background />
                    <Item links={props.link}></Item>
                    
                </Suspense>
            </Canvas>
        </div>
    )
}