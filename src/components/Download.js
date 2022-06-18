import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {ImFolderDownload} from "react-icons/im";
import MaterialToolTip from '@material-ui/core/Tooltip'
import { withStyles } from '@mui/styles';

const LightTooltip = withStyles(theme =>({
    tooltip: {
      fontSize: 15,
    },
  }))(MaterialToolTip);

function ExportGltf(props){

  /**
   * The function takes the current scene and exports it as a glb file.
   */
  function Download(){
    const options = {
        binary: true,
        maxTextureSize: Infinity,
        animations: props.allAnim
        // includeCustomExtensions: true
      }
      
    const exporter = new GLTFExporter()
    exporter.parse(
        props.downloadModel.scene,
        function(result){
            saveArrayBuffer(result, 'SavedScene.glb')
        },options)
   }
   
   /**
    * It takes an array buffer and a file name and saves the array buffer as a file with the given file
    * name.
    * @param buffer - The array buffer to save.
    * @param fileName - The name of the file to be saved.
    */
   function saveArrayBuffer(buffer, fileName){
    save(new Blob([buffer], {type: 'application/octet-stream'}), fileName)
   }
   const link = document.createElement('a')
   document.body.appendChild(link)
   /**
    * It takes a blob and a file name and creates a link to the blob
    * @param blob - The blob to save.
    * @param fileName - The name of the file you want to save the blob as.
    */
   function save(blob, fileName){
       link.href =URL.createObjectURL(blob);
       link.download = fileName;
       link.click()
   }
    return(
        <>
            <LightTooltip title="Download model"><button id="downl" onClick={Download}><ImFolderDownload size={"20px"}/></button></LightTooltip>
        </>
    )
}
export default ExportGltf;