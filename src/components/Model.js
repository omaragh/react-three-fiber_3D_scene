import React from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



export default function Model(props) {
  
  const gltf = useLoader(GLTFLoader, props.value);
  
    return (
      <>
        <primitive object={gltf.scene} scale={0.8} />
        
      </>
    );
};


