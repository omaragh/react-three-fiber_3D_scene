import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {ImFolderDownload} from "react-icons/im";
import Tooltip from '@mui/material/Tooltip';

function ExportGltf(props){
  function Download(){
    const options = {
        binary: true,
        maxTextureSize: Infinity,
        animations: props.allAnim
        // includeCustomExtensions: true
      }
      
    const exporter = new GLTFExporter();
    exporter.parse(
        props.downloadModel.scene,
        function(result){
            saveArrayBuffer(result, 'SavedScene.glb')
        },options)
   }
   
   function saveArrayBuffer(buffer, fileName){
    save(new Blob([buffer], {type: 'application/octet-stream'}), fileName)
   }
   const link = document.createElement('a')
   document.body.appendChild(link)
   function save(blob, fileName){
       link.href =URL.createObjectURL(blob);
       link.download = fileName;
       link.click()
   }
    return(
        <>
            <Tooltip title="Download model"><button id="downl" onClick={Download}><ImFolderDownload size={"20px"}/></button></Tooltip>
        </>
    )
}
export default ExportGltf;