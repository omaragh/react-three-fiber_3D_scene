import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useTexture, Reflector, useGLTF } from "@react-three/drei";
import Model from "./Model";
import Drop from "./Dropfile";
import styles from "./Canvas.module.css";
import ShowAllButtons from "./ActionButtons";
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import ExportGltf from "./Download";

function CanvasField() { 
    const [url, setUrl] = useState("./Xbot.glb")
    const [movement, setMovement] = useState(0)
    const [allData, setAllData] = useState([])
    const [downloadData, setDownload] = useState();
    // state = {url: null,
    //               movement:0,
    //               allData: [],
    //               }
  
  function callbackFunction(childData){
    setUrl(childData);
    setMovement(0);
    setAllData([])
  }; 

  function updateAction(data){
    setMovement(data);
  }

  function handleData (info){
    setDownload(info)
    let arr = [];
    if(allData.length <1){
      arr.push(...info.animations)  
    } 
    arr.forEach(element => {
      setAllData(oldArray => [...oldArray, element]);
    });
  }
  function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
      <Reflector resolution={1980} args={[14, 14]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
      </Reflector>
    )
  }
  function BackDrop() {
    return (
      <mesh receiveShadow position={[0, -1, -5]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="#ffccff" />
      </mesh>
    );
  }
  function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }
  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }
  
  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }
  
    return ( 
      
        <div>
          <Drop parentCallback={callbackFunction}/>
          <div className={styles.canvasArea}>  
            <Canvas style={{height:500,width:800}} dpr={[1, 1.5]} camera={{ position: [0, 0, 9] }}>
            <color attach="background" args={['black']} />
              <Suspense fallback={null}>
                <Center position={[5, 5, 10]} > 
                  <BackDrop/>
                  <KeyLight brightness={5.6} color={"#ffc9f9"}/>
                  <FillLight brightness={2.6} color={"#bdefff"} />
                  <RimLight brightness={54} color={"#fff"} />
                  {url ? <Model value={url} action={movement} handleData={handleData}/>: null} 
                  <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} />
                </Center>
                <OrbitControls />
                  {/* <Environment preset="sunset"  background={true}/> */}
              </Suspense>
            </Canvas>
          </div>  
          <div className="controls">
            {url? <ShowAllButtons sendInfo={allData} updateAnim={updateAction}/>: null}
          </div>
          {downloadData? <ExportGltf downloadModel={downloadData} currentAnim={movement}/>:null}
        </div>
    );
  }    

export default CanvasField;