import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useFrame, } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const mixer = useRef();
    const gltf = useGLTF(props.value);
    const allAnimations = []
    // gltf.nodes.mixamorigHead.rotation._y += 180
 
    if (gltf.animations.length > 0) {
        for (let i = 0; i < gltf.animations.length; i++) {
            allAnimations.push(gltf.animations[i])
        }
    }
    
    if (props.chosenAnim !== null ) {  
        if(gltf.animations.includes(props.chosenAnim)){
            console.log("zit er al in")
        }else{
            gltf.animations.push(props.chosenAnim) 
        }
    }
    useEffect(() => {
        if (gltf) {
            if (gltf.animations.length > 0) { 
                mixer.current = new THREE.AnimationMixer(gltf.scene)
                // mixer.current
                // if(mixer.current.weight._actions.length !== 0){
                //     mixer.current.weight._actions[0].weight = props.sliderVal2 
                // }
                const action = mixer.current.clipAction(allAnimations[props.action])
                action.timeScale = props.sliderVal1 
                action.weight = props.sliderVal2                
                action.play();
            }
        }
    }, [gltf, allAnimations, props.action, props.sliderVal1, props.sliderVal2])
    
    useFrame((state, delta) => {
        mixer.current.update(delta)
    })
    props.handleData(gltf)
    
    return (
        <>
            <primitive object={gltf.scene} scale={1} />
        </>
    );
};
