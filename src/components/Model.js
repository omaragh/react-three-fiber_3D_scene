import React, { useEffect, useRef} from 'react'
import * as THREE from "three"
import { useFrame,  } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'


export default function Model(props) {
    const mixer= useRef();
    const gltf = useGLTF(props.value);
    const allAnimations = []
    const actions = props.action
    for (let i = 0; i <gltf.animations.length; i++){
        allAnimations.push(gltf.animations[i])
    }
    const newVal =()=>{
        props.handleData(allAnimations);
    }
    
    useEffect(()=> {
        if(gltf.animations !== 0){
        if (gltf) {
            mixer.current = new THREE.AnimationMixer(gltf.scene)
            const action = mixer.current.clipAction(allAnimations[actions])
            action.play();
        }
    }}, [gltf, allAnimations, actions])
    
    useFrame((state, delta) => {
        mixer.current.update(delta) 
    })

    return (
      <>
         {/* <primitive object={gltf.scene}  /> */}
         {newVal(props)}
         <primitive object={gltf.scene} scale={2}/>
      </>
    );
};
