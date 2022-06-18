import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useTexture, Reflector, Html, useProgress, Sky,Environment } from "@react-three/drei";
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
import DroppedEnv from "./Dropdown";

function CanvasField() { 
  const [url, setUrl] = useState("/botTest.glb")
  const [movement, setMovement] = useState(0)
  const [allAnimData, setAllAnimData] = useState([])
  const [downloadData, setDownload] = useState();
  const [selectedAnim, setAnim] = useState(null);
  const [sliderNum, setSliderNum] = useState(1);
  const [sliderNum2, setSliderNum2] = useState(1);
  const [currentEnv, setEnv] = useState("city");

  const LightTooltip = withStyles(theme =>({
    tooltip: {
      fontSize: 15,
    },
  }))(MaterialToolTip);

  /**
   * It takes a string as an argument, and then sets the value of the variable "env" to that string.
   * @param newEnv - The new environment to change to.
   */
  function changeCurrentEnv(newEnv){
    setEnv(newEnv)
  }

  /**
   * It takes in a childData object, and then sets the state of the url, movement, allAnimData,
   * download, anim, and sliderNum.
   * @param childData - the data that is passed from the parent component
   */
  function callbackFunction(childData){
    setUrl(childData);
    setMovement(0);
    setAllAnimData([])
    setDownload()
    setAnim(null)
    setSliderNum(1)
  }; 

  /**
   * The updateAction function takes in a data object, and then calls the setMovement function with the
   * data object as an argument.
   * @param data - The data object that is sent from the server.
   */
  function updateAction(data){
    setMovement(data);
  }

  /**
   * It takes the gltf data, sets the download link, and if there are no animations in the allAnimData
   * array, it sets the allAnimData array to the gltf animations.
   * @param gltf - The gltf object that is returned from the loader.
   */
  function handleData (gltf){
    setDownload(gltf)
    if(allAnimData.length < 1){
      setAllAnimData(gltf.animations)
    }
  }

  /**
   * If the array allAnimData includes the data from the function parameter, then do nothing. If it
   * doesn't, then add the data to the array and set the state of the variable anim to the data.
   * @param animData - the data that is being passed from the child component
   */
  const updateToNewAnim = (animData)=>{
    let arr = []
    if(allAnimData.includes(animData)){
      console.log("zit er in")
    }else{arr.push(animData)
      setAllAnimData((oldArray)=>[...oldArray, animData])
      setAnim(animData)}
  }

  /**
   * It sets the sliderNum variable to the value of the slider.
   * @param value - The value of the slider
   */
  function sliderValue(value){
    setSliderNum(value)
  }
  /**
   * It sets the value of the slider to the value of the slider.
   * @param value - the value of the slider
   */
  function sliderValueTwee(value){
    setSliderNum2(value)
  }

 /**
  * This function creates a Reflector component that uses a texture for the floor and a texture for the
  * normal map.
  * @param props - The props passed to the component.
  * @returns A React component that renders a Reflector with a material that uses the textures.
  */
  function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
      <Reflector resolution={1024} args={[10, 10]} {...props}>
        {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
      </Reflector>
    )
  }
  /**
   * This function returns a rectangle area light with a width, a height , a color of the
   * color passed in, an intensity of the brightness passed in, a position, a lookAt,
   * a penumbra, and a castShadow.
   * @returns A rectangle light.
   */
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
  /**
   * The FillLight function is a React component that returns a rectangle area light
   * @returns A rectangle light.
   */
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
  /**
   * The function takes in two props, brightness and color, and returns a rectangle area light with the
   * given brightness and color
   * @returns A rectangle area light.
   */
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
 
  /**
   * This is a React hook that returns the progress value
   * @returns A function that returns a component.
   */
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
                <Suspense fallback={<Loader/>}>
                  <Center position={[5, 2, 5]}>
                    <KeyLight brightness={5.6} color={"#ffc9f9"}/>
                    <FillLight brightness={2.6} color={"#bdefff"}/>
                    <RimLight brightness={54} color={"#fff"} />
                    {currentEnv === "disable"? <Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />: <Environment preset={currentEnv} background />}
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
          <div className={styles.dropMenu}>
            <DroppedEnv changeEnv={changeCurrentEnv} env={currentEnv}/>
          </div>
          
        </div>
    );
  }    

export default CanvasField;