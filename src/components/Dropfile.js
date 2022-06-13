import ReactFileReader from "react-file-reader";
import React from "react";
import {ImFolderUpload} from"react-icons/im";
import Tooltip from '@mui/material/Tooltip';
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
              <Tooltip title="Load local model"><button><ImFolderUpload size={"20px"}/></button></Tooltip>
          </ReactFileReader>
        </>
      </div>
    );
  }
}


export default Drop;