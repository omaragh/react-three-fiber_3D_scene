import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useTexture, Reflector, Html, useProgress, Sky } from "@react-three/drei";
import Model from "./Model";
import Drop from "./Dropfile";
import styles from "./Canvas.module.css";
import ShowAllButtons from "./ActionButtons";
import ExportGltf from "./Download";
import AnimationList from "./LoadAnimations";
import PoseSlider from "./RangeSlider";
import Upload from "./Upload";
import { CircularProgress } from "@mui/material";
import { CanvasCapture} from 'canvas-capture';
import HelpPanel from "./HelpPanel";
import MaterialToolTip from '@material-ui/core/Tooltip'
import { withStyles } from '@mui/styles';


function CanvasField() { 
  const [url, setUrl] = useState("./botTest.glb")
  const [movement, setMovement] = useState(0)
  const [allAnimData, setAllAnimData] = useState([])
  const [downloadData, setDownload] = useState();
  const [selectedAnim, setAnim] = useState(null);
  const [sliderNum, setSliderNum] = useState(1);
  const [sliderNum2, setSliderNum2] = useState(1);
  
  const LightTooltip = withStyles(theme =>({
    tooltip: {
      fontSize: 15,
    },
  }))(MaterialToolTip);
  function callbackFunction(childData){
    setUrl(childData);
    setMovement(0);
    setAllAnimData([])
    setDownload()
    setAnim(null)
    setSliderNum(1)
  }; 

  function updateAction(data){
    setMovement(data);
  }

  function handleData (gltf){
    setDownload(gltf)
    if(allAnimData.length < 1){
      setAllAnimData(gltf.animations)
    }
  }

  const updateToNewAnim = (animData)=>{
    let arr = []
    if(allAnimData.includes(animData)){
      console.log("zit er in")
    }else{arr.push(animData)
      setAllAnimData((oldArray)=>[...oldArray, animData])
      setAnim(animData)}
  }

  function sliderValue(value){
    setSliderNum(value)
  }
  function sliderValueTwee(value){
    setSliderNum2(value)
  }

  function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
      <Reflector resolution={1024} args={[10, 10]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
      </Reflector>
    )
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
    const {progress} = useProgress();
    return <Html center><CircularProgress value={progress}></CircularProgress></Html>
  }
//   if(document.getElementById('canvasModel')){
//     CanvasCapture.init(
//         document.getElementById('canvasModel'),
//         {showRecDot: true}
//       )
//       CanvasCapture.bindKeyToVideoRecord('v',{
//         format: 'mp4',
//         name: 'myVideo',
//         quality: 0.6,
//       })
//       CanvasCapture.bindKeyToPNGSnapshot('p'); 
//       function loop(){
//         requestAnimationFrame(loop)
//         if(CanvasCapture.isRecording()){
//           CanvasCapture.recordFrame();
//         } 
//       }
//       loop()
// }

    return ( 
        <div className={styles.wholeCanvas}>
          <div className={styles.container}>
            <LightTooltip title="Click on an animation to add it to your model" placement="right" arrow>
              <div className={styles.controls}>
              <h3>Animation list</h3>
                <AnimationList runFunc={updateToNewAnim}/>
              </div>
            </LightTooltip>
            <div className={styles.canvasArea} id="canvasModel">
              <Canvas id="canvasModel" style={{height:"90vh", width:"100vw"}} dpr={[0, 1]} camera={{ position: [0, 0, 5] }}>
              <Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
                <Suspense fallback={<Loader/>}>
                  <Center position={[5, 2, 5]}>
                    <KeyLight brightness={5.6} color={"#ffc9f9"}/>
                    <FillLight brightness={2.6} color={"#bdefff"}/>
                    <RimLight brightness={54} color={"#fff"} />
                    {url ? <Model value={url} action={movement} chosenAnim={selectedAnim} sliderVal1={sliderNum} sliderVal2={sliderNum2} handleData={handleData}/>: null} 
                    <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={0} />
                  </Center>
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <LightTooltip title="Click on an animation to preview it" placement="left" arrow>
            <div className={styles.currentAnimations}>
              <h3>Current Animations</h3>
              {url? <ShowAllButtons className={styles.knopje} sendInfo={allAnimData} updateAnim={updateAction}/>: null}
            </div></LightTooltip>
          </div>
          <div className={styles.buttonGroup}>
            <Drop parentCallback={callbackFunction}/>
            {downloadData? <ExportGltf downloadModel={downloadData} allAnim={allAnimData}/>:null}
            <Upload fileToUpload={downloadData} allAnims={allAnimData}/>
            <HelpPanel/>
          </div>
          <div className={styles.slides}>
            <div>
              <p>Adjust the speed</p><PoseSlider id="firstSlider" sliderData={sliderValue}/>
            </div>
            
            <div>
              <p >Adjust the weight</p><PoseSlider id="secondSlider" sliderData2={sliderValueTwee}/>
            </div>
          </div>
        </div>
    );
  }    

export default CanvasField;