import { Slider } from "@mui/material";
import { useState } from "react";


/**
 * Creates the sliders to be able to change certain values of the model
 * @param props 
 * @returns 
 */
function PoseSlider(props){
    const [value, setValue] = useState(1)

    const changeValue = (event, value)=>{
        if(props.id === "firstSlider"){
            setValue(value);
            props.sliderData(value)
        }else if(props.id ==="secondSlider"){
            setValue(value);
            props.sliderData2(value)
        }
    }
    const getText = (value)=>`${value}`
    return(
        <div style={{width:300, margin: 30}}>
            <Slider value={value} min={0} max={2} step={0.01} getAriaValueText={getText} valueLabelDisplay='auto' onChange={changeValue}/>
        </div>
    )
}

export default PoseSlider;