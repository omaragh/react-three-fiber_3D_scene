import React from "react";
import styles from "./ActionButtons.module.css"

function ShowAllButtons(props){
  let arrButtons = [];
  if(props.sendInfo.length !== 0){
    for (let i = 0; i < props.sendInfo.length; i++) { 
      props.sendInfo[i].name = props.sendInfo[i].name.replace("_", " ");
      //&& props.sendInfo[i].name.replace(/([a-z])([A-Z])/g, '$1 $2')
      arrButtons.push(<button className={styles.anims}onClick={() =>props.updateAnim(i)} key={i}>{props.sendInfo[i].name}</button>)
    } 
  }
  return (
    <div> 
      {arrButtons}
    </div>
  )
}
export default ShowAllButtons;
