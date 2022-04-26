import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

export default function Model({...props}) {
    const mixer= useRef();
    const gltf = useGLTF(props.value);
    const allAnimations = [];
    
    for (let i = 0; i <gltf.animations.length; i++){
        allAnimations.push(gltf.animations[i])
    }
    
    useEffect(()=> {
        
        if(gltf.animations !== 0){
        if (gltf) {
            mixer.current = new THREE.AnimationMixer(gltf.scene)
            const action = mixer.current.clipAction(allAnimations[props.action])
            action.play();
        }
    }}, [gltf, allAnimations])
    
    useFrame((state, delta) => {
        mixer.current.update(delta) 
    })
    
    return (
      <>
         {/* <primitive object={gltf.scene}  /> */}
         {gltf ? <primitive object={gltf.scene} scale={5}/> : null}
      </>
    );
};
