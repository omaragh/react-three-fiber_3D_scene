import React from "react";

import styles from "./HeaderNav.module.css"
import {FaUserAlt} from 'react-icons/fa';
import {CgEditUnmask} from 'react-icons/cg'
function Nav(props){
        console.log(props)
        return (
          <div className="nav">
            <img onClick={props.home} className={styles.logo}src="/logo3.svg" width="150px" alt="logo"></img>
            {props.currentShow?
            <button onClick={props.page} className={styles.UserIcon}><FaUserAlt/> Community hub</button>:
            <button onClick={props.page} className={styles.UserIcon}><CgEditUnmask/>3D Editor</button>}
            
          
          </div>
        );
}

export default Nav;