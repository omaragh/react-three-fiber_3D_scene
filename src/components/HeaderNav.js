import React, { useState } from "react";

import styles from "./HeaderNav.module.css"
import {FaUserAlt} from 'react-icons/fa';

function Nav(props){

        return (
          <div className="nav">
            <img className={styles.logo}src="./logo3.png" width="100px" alt="logo"></img>
            {props.currentShow?
            <button onClick={props.page} className={styles.UserIcon} ><FaUserAlt></FaUserAlt> Community hub</button>:
            <button onClick={props.page} className={styles.UserIcon}>3D Editor</button>}
            
          
          </div>
        );
}

export default Nav;