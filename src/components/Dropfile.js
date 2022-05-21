import ReactFileReader from "react-file-reader";
import React from "react";


class Drop extends React.Component {
  sendData = (files) => {
    console.log(files);
    this.props.parentCallback(files.base64);
  };
  render(){
    return (
      <div>
        <>
          <ReactFileReader fileTypes={[".glb", ".gltf"]} base64={true} handleFiles={this.sendData}>
              <button>Open file</button>
          </ReactFileReader>
        </>
      </div>
    );
  }
}


export default Drop;