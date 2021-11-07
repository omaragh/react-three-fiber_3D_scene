import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./components/Model";
import Drop from "./components/Dropfile";

class App extends React.Component { 
  state = { url: "./out.glb" }
  callbackFunction = (childData) => {
    this.setState({url: childData})
  }; 
  render() {
    return (
      <div>
        <Canvas style={{height:500,width:600}} >
          <Suspense fallback={null}>
            <Center position={[5, 5, 10]} > 
              <Model value={this.state.url}/>
              </Center>
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
        <Drop parentCallback={this.callbackFunction}/>
        <p> {this.state.url} </p>
      </div>
    );
  }    
}

export default App;