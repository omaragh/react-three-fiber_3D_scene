import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MaterialToolTip from '@material-ui/core/Tooltip'
import { withStyles } from '@mui/styles';

const LightTooltip = withStyles(theme =>({
    tooltip: {
      fontSize: 15,
    },
  }))(MaterialToolTip);

/**
 * DroppedEnv is a function that takes in props and returns a dropdown menu that changes the enviroment
 * of the scene.
 * @param props - {
 * @returns The return is a function that takes in props and returns a component.
 */
export default function DroppedEnv(props){
  const [currentEnv, setEnv] = useState(props.env);

 useEffect(()=>{
  props.changeEnv(currentEnv)
 })

  return (
    <LightTooltip title="Change the enviroment" placement="right" arrow>
    <Box sx={{ maxWidth: 200 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label"/>
        <Select sx={{m: 1, color:"#69CCC1"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentEnv}
          label="Env"
          onChange={event=>setEnv(event.target.value)} >
          <MenuItem value={"disable"}>disable</MenuItem>
          <MenuItem value={"sunset"}>Sunset</MenuItem>
          <MenuItem value={"dawn"}>dawn</MenuItem>
          <MenuItem value={"night"}>night</MenuItem>
          <MenuItem value={"warehouse"}>warehouse</MenuItem>
          <MenuItem value={"forest"}>forest</MenuItem>
          <MenuItem value={"apartment"}>apartment</MenuItem>
          <MenuItem value={"studio"}>studio</MenuItem>
          <MenuItem value={"city"}>City</MenuItem>
          <MenuItem value={"park"}>park</MenuItem>
          <MenuItem value={"lobby"}>lobby</MenuItem>    
        </Select>
      </FormControl>
    </Box>
    </LightTooltip>
  );
}
