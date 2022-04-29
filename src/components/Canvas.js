import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Drop from "./Dropfile";
import styles from "./Canvas.module.css";
import ShowAllButtons from "./ActionButtons";

function CanvasField() { 
    const [url, setUrl] = useState("./Xbot.glb")
    const [movement, setMovement] = useState(0)
    const [allData, setAllData] = useState([])
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
    let arr = [];
    if(allData.length <1){
      arr.push(...info)  
    } 
    arr.forEach(element => {
      setAllData(oldArray => [...oldArray, element]);
    });
  }
    return ( 
        <div>
          <Drop parentCallback={callbackFunction}/>
          <div className={styles.canvasArea}>  
            <Canvas style={{height:500,width:800}}>
              <Suspense fallback={null}>
                <Center position={[5, 5, 10]} > 
                {url ? <Model value={url} action={movement} handleData={handleData}/>: null} 
                </Center>
                <OrbitControls/>
                <Environment preset="sunset"  background={true}/>
              </Suspense>
            </Canvas>
          </div>  
            
          <div className="controls">
            {url? <ShowAllButtons sendInfo={allData} updateAnim={updateAction}/>: null}
          </div>
        </div>
    );
  }    

export default CanvasField;