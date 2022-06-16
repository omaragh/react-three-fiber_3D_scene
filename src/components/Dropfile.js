import ReactFileReader from "react-file-reader";
import React from "react";
import {ImFolderUpload} from"react-icons/im";
import MaterialToolTip from '@material-ui/core/Tooltip'
import { withStyles } from '@mui/styles';

const LightTooltip = withStyles(theme =>({
    tooltip: {
      fontSize: 15,
    },
  }))(MaterialToolTip);

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
              <LightTooltip title="Load local model"><button><ImFolderUpload size={"20px"}/></button></LightTooltip>
          </ReactFileReader>
        </>
      </div>
    );
  }
}


export default Drop;