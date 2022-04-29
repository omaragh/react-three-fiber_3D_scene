import React from "react";
import styles from "./ActionButtons.module.css"

function ShowAllButtons(props){
  let arrButtons = [];
  const propData = props.sendInfo
      for (let i = 0; i < propData.length/2; i++) { 
        propData[i].name = propData[i].name.replace("_", " ");
        //&& propData[i].name.replace(/([a-z])([A-Z])/g, '$1 $2')
        arrButtons.push(<button className={styles.ActionButton} onClick={() =>props.updateAnim(i)} key={i}>{propData[i].name}</button>)
      }

  return (
    <div> 
      {arrButtons}
    </div>
  )
}
export default ShowAllButtons;
