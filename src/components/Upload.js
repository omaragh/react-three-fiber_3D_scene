import { storage } from "../firebase";
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {FaCloudUploadAlt} from 'react-icons/fa'
import Tooltip from '@mui/material/Tooltip';

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
        // uploadBytes(fileRef, props.fileToUpload).then(()=>{
        //     alert("uploaded")
        // })
        // console.log(props.fileToUpload.scene.name)
    }
    return(
        <div>
            <Tooltip title="Upload"><button onClick={uploadFile}><FaCloudUploadAlt size={"20px"}/></button></Tooltip>
            <Snackbar autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                open={open}
                onClose={handleClose}
                message="Your model has been uploaded"
                key={vertical + horizontal}
            />
        </div>
    )
}