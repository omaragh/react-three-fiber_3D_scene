import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import styles from "./LoadAnimations.module.css"
const json = require("./animations.json");

export default function AnimationList(props){
const singleAnim = new GLTFLoader();
function loadSelectedAnim(index){
    singleAnim.load(json[index].url,
            (animation)=>{
                props.runFunc(animation.animations[0])
            }           
    )
}
function CreateAnimButtons(){
    let diffButtons = []
    for(let i = 0; i < json.length; i++){
        diffButtons.push(<button className={styles.CustomAnim} onClick={() => loadSelectedAnim(i)} key={i}><div className={styles.containerButtonName}><p>{json[i].name}</p></div></button>)
    }
    return <div >{diffButtons}</div>
}
    return(
        <div>
            <CreateAnimButtons/>
        </div>
    )
}
