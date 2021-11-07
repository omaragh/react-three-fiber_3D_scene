import ReactFileReader from "react-file-reader";
import { useState } from 'react';

function Drop(){
    const [url, setUrl] = useState("D:\Desktop\proof.png");
    
    const handleFiles = (files => {
        console.log(files);
        setUrl(files.base64);
    });
    
    return (
        <div className="App">
          <>
              <img src={url} alt="test"/>
            <ReactFileReader fileTypes={[".glb", ".gltf", ".fbx", ".png", ".jpeg"]} base64={true} handleFiles={handleFiles}>
                <button>Open file</button>
            </ReactFileReader>
          </>
        </div>
      );
}
export default Drop;