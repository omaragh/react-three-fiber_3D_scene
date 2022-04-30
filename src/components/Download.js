import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';

function ExportGltf(props){
    let downData = props.downloadModel
    let animationValue = props.currentAnim
  function Download(){
    const options = {
        binary: true,
        maxTextureSize: 4096,
        animations: [downData.animations[animationValue]],
        includeCustomExtensions: true
      }

    const exporter = new GLTFExporter();
    exporter.parse(
        downData.scene,
        function(result){
            saveArrayBuffer(result, 'SavedScene.glb')
            console.log(result)
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
            <button id="downl" onClick={Download}>Download model</button>
        </>
    )
}
export default ExportGltf;