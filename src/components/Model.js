import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useFrame, } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    let mixer = useRef();
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
            mixer.current = new THREE.AnimationMixer(gltf.scene)
            if (gltf.animations.length > 0) { 
                const action = mixer.current.clipAction(allAnimations[props.action])
                action.timeScale = props.sliderVal1 
                action.weight = props.sliderVal2            
                action.play();
            }
            // mixer.current = new THREE.AnimationMixer(gltf.scene)
            // if(props.val){  
            //     for(let i = 0; i < gltf.animations.length; i++){
            //         const animation = mixer.current.clipAction(allAnimations[i]);
            //         animation.play();
            //     }
            // }
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
