import React from "react";
import styles from "./ActionButtons.module.css"

/**
 * It generates an array of buttons with the animation data attached.
 * @param props
 * @returns An array of buttons.
 */
function ShowAllButtons(props){
  let arrButtons = [];

  if(props.sendInfo.length !== 0){
    for (let i = 0; i < props.sendInfo.length; i++) { 
      props.sendInfo[i].name = props.sendInfo[i].name.replace("_", " ");
      arrButtons.push(<button className={styles.anims}onClick={() =>props.updateAnim(i)} key={i}><p>{props.sendInfo[i].name}</p></button>)
    } 
  }
  return (
    <div> 
      {arrButtons}
    </div>
  )
}
export default ShowAllButtons;
