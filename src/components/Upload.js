import { storage } from "../firebase";
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {FaCloudUploadAlt} from 'react-icons/fa'
import MaterialToolTip from '@material-ui/core/Tooltip'
import { withStyles } from '@mui/styles';

const LightTooltip = withStyles(theme =>({
    tooltip: {
      fontSize: 15,
    },
  }))(MaterialToolTip);

export default function Upload(props){
    
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'left',
      });
    
      const { vertical, horizontal, open } = state;
      const handleClose = () => {
        setState({ ...state, open: false });
      };
    /**
     * It takes a file, converts it to a glb, and uploads it to firebase storage
     * @returns The result is a blob of data.
     */
    function uploadFile(){
        if(props.fileToUpload == null || props.allAnims.length < 2) return alert("add animations");
        const fileRef = ref(storage, `animatedModels/${props.fileToUpload.scene.name + v4()}.glb`)
        const options = {
            binary: true,
            maxTextureSize: Infinity,
            animations: props.allAnims
            // includeCustomExtensions: true
          }
        const exporter = new GLTFExporter();
        exporter.parse(
            props.fileToUpload.scene,
            function(result){
                console.log(result)
                uploadBytes(fileRef, result).then(()=>{
                    setState({ open: true});  
                })
            },options)
    }
    return(
        <div>
            <LightTooltip title="Upload"><button onClick={uploadFile}><FaCloudUploadAlt size={"20px"}/></button></LightTooltip>
            <Snackbar autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',}}
                open={open}
                onClose={handleClose}
                message="Your model has been uploaded"
                key={vertical + horizontal}/>
        </div>
    )
}