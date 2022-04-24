import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Drop from "./Dropfile";
import styles from "./Canvas.module.css";
import Archer from "../assets/Archer"

class CanvasField extends React.Component { 
  state = { url: "./Xbot.glb" }
  callbackFunction = (childData) => {
    this.setState({url: childData})
  }; 
  
  constructor(props){
    super(props);
    this.state = {action: "StandingIdle"}
  }
  
  render() {
    
    return (
        <div>
          <div className="controls">
          <button onClick={()=>{this.setState({action: "RunForward"})}}>Run Forward</button>
          <button onClick={()=>{this.setState({action: "Death"})}}>Death</button>
          <button onClick={()=>{this.setState({action: "DrawArrow"})}}>Draw arrow</button>
          <button onClick={()=>{this.setState({action: "StandingIdle"})}}>StandingIdle</button>
        </div>
          <div className={styles.canvasArea}>
                <Canvas style={{height:400,width:400}}>
                  <ambientLight />
                  <pointLight castShadow intensity={2} position={[-1, 1, 3]} color="red"/>
                  <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
                  <pointLight intensity={2} position={[0, 3, -10]} color="white" />
                  <Suspense fallback={null}>
                  <Center position={[5, 5, 10]} > 
                    <Archer action={this.state.action}/>
                    </Center>
                  </Suspense>
                  <OrbitControls />
                </Canvas>

            {/* <Canvas style={{height:400,width:400}}>
            
              <Suspense fallback={null}>
                <Center position={[5, 5, 10]} > 
                  <Model value={this.state.url}/>
                </Center>
                <OrbitControls/>
                <Environment preset="sunset"  background={true}/>
              </Suspense>
            </Canvas> */}
            
          </div>
          <Drop parentCallback={this.callbackFunction}/>
            <p> {this.state.url} </p>
        </div>
    );
  }    
}

export default CanvasField;