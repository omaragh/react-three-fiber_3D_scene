import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useTexture, Reflector, Html, useProgress, Sky } from "@react-three/drei";
import Model from "./Model";
import Drop from "./Dropfile";
import styles from "./Canvas.module.css";
import ShowAllButtons from "./ActionButtons";
import ExportGltf from "./Download";
import AnimationList from "./LoadAnimations";
// state = {
//   newAnim: null
// }
// updateCurrentAnim = (animData)=>{
//   this.setState({newAnim: animData})
// }

function CanvasField() { 
  const [url, setUrl] = useState("./botTest.glb")
  const [movement, setMovement] = useState(0)
  const [allAnimData, setAllAnimData] = useState([])
  const [downloadData, setDownload] = useState();
  const [selectedAnim, setAnim] = useState(null);
  function callbackFunction(childData){
    setUrl(childData);
    setMovement(0);
    setAllAnimData([])
    setDownload()
    setAnim(null)
  }; 

  function updateAction(data){
    setMovement(data);
  }

  function handleData (gltfAnimations){
    if(allAnimData.length < 1){
      setAllAnimData(gltfAnimations)
      setDownload(gltfAnimations)
    }
  //   setAllAnimData(gltfAnimations.animations) 
  }

  const updateToNewAnim = (animData)=>{
    let arr = []
    if(allAnimData.includes(animData)){
      console.log("zit er in")
    }else{arr.push(animData)
      setAllAnimData((oldArray)=>[...oldArray, animData])
      setAnim(animData)}
  }

  function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
      <Reflector resolution={1024} args={[10, 10]} {...props}>
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
        position={[-2, 0, 10]}
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
        position={[2, 1, 10]}
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
  
  function Loader(){
    const {progress} = useProgress()
    return <Html center style={{color: "red"}}> {progress} % loaded</Html>
  }
    return ( 
        <div className={styles.wholeCanvas}>
          <div className={styles.controls}>
            {url? <ShowAllButtons className={styles.knopje} sendInfo={allAnimData} updateAnim={updateAction}/>: null}
          </div>
          <div className={styles.canvasArea}>  
            <Canvas style={{height:500,width:800}} dpr={[0, 1]} camera={{ position: [0, 0, 5] }}>
            <Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
              <Suspense fallback={<Loader/>}>
                <Center position={[5, 2, 5]} > 
                  {/* <BackDrop/> */}
                  <KeyLight brightness={5.6} color={"#ffc9f9"}/>
                  <FillLight brightness={2.6} color={"#bdefff"} />
                  <RimLight brightness={54} color={"#fff"} />
                  {url ? <Model value={url} action={movement} chosenAnim={selectedAnim} handleData={handleData}/>: null} 
                  <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={0} />
                </Center>
                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>  
          <div className={styles.buttonGroup}>
            {downloadData? <ExportGltf downloadModel={downloadData} currentAnim={movement}/>:null}
            <Drop parentCallback={callbackFunction}/>
          </div>
          <AnimationList runFunc={updateToNewAnim}/>
        </div>
    );
  }    

export default CanvasField;