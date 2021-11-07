import ReactFileReader from "react-file-reader";
import { useState } from 'react';
import React from "react";

class Drop extends React.Component {
  sendData = (files) => {
    console.log(files);
    this.props.parentCallback(files.base64);
  };
  render(){
    return (
      <div className="App">
        <>
          <ReactFileReader fileTypes={[".glb", ".gltf", ".fbx", ".png", ".jpeg"]} base64={true} handleFiles={this.sendData}>
              <button>Open file</button>
          </ReactFileReader>
        </>
      </div>
    );
  }
}


export default Drop;