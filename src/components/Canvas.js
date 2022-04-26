import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Drop from "./Dropfile";
import styles from "./Canvas.module.css";


class CanvasField extends React.Component { 
  state = { url: "./Xbot.glb",
            movement:2
          }

  callbackFunction = (childData) => {
    this.setState({url: childData})
  }; 

  updateAction = (data)=>{
    this.setState({movement: data})
  }
  
  render() {
    return (
        <div>
          <div className="controls">
          <button onClick={() =>this.updateAction(0)}>Agree</button>
          <button onClick={() =>this.updateAction(1)}>Headshake</button>
          <button onClick={() =>this.updateAction(2)}>Idle</button>
          <button onClick={() =>this.updateAction(3)}>Run</button>
          <button onClick={() =>this.updateAction(4)}>sad</button>
          <button onClick={() =>this.updateAction(6)}>walk</button>
        </div>
          <div className={styles.canvasArea}>
            <Canvas style={{height:500,width:800}}>
              <Suspense fallback={null}>
                <Center position={[5, 5, 10]} > 
                  <Model value={this.state.url} action={this.state.movement} />
                </Center>
                <OrbitControls/>
                <Environment preset="sunset"  background={true}/>
              </Suspense>
            </Canvas>
          </div>
          <Drop parentCallback={this.callbackFunction}/>
        </div>
    );
  }    
}

export default CanvasField;