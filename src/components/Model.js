import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from "three"
import { useFrame, } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const mixer = useRef();
    const gltf = useGLTF(props.value);
    const allAnimations = []

    if (gltf.animations.length > 0) {
        for (let i = 0; i < gltf.animations.length; i++) {
            allAnimations.push(gltf.animations[i])
        }
    }
    
    if (props.chosenAnim !== null) {    
        gltf.animations.push(props.chosenAnim) 
        console.log(props.chosenAnim.name)
                // gltf.animations.push(props.chosenAnim)
                // for(let i =0; i< gltf.animations.length; i++){
                //     if(gltf.animations[i].name !== props.chosenAnim.name){          
                //         gltf.animations.push(props.chosenAnim)
                //         console.log(gltf.animations[i].name)
                //     }  
                // }
            
    }
    console.log(gltf.animations)
    useEffect(() => {
        if (gltf) {
            if (gltf.animations.length > 0) {
                mixer.current = new THREE.AnimationMixer(gltf.scene)
                const action = mixer.current.clipAction(allAnimations[props.action])
                action.play();
            }
        }
    }, [gltf, allAnimations, props.action])

    useFrame((state, delta) => {
        mixer.current.update(delta)
    })
    props.handleData(gltf.animations)
    console.log(gltf)
    return (
        <>
            {/* <primitive object={gltf.scene}  /> */}
            <primitive object={gltf.scene} scale={1} />
        </>
    );
};
