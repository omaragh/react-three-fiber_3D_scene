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
        props.handleData(gltf);
    }
    
    useEffect(()=> {
        
        if (gltf) {
            if(gltf.animations.length !== 0){
                mixer.current = new THREE.AnimationMixer(gltf.scene)
                const action = mixer.current.clipAction(allAnimations[actions])
                action.play();
        }else{
            alert("This model does not have an animation, proceed to continue")
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
