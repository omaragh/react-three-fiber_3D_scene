import React from "react";

import styles from "./HeaderNav.module.css"
import {FaUserAlt} from 'react-icons/fa';

function Nav(){
        return (
          <div className="nav">
            <img className={styles.logo}src="./logo3.png" width="100px" alt="logo"></img>
            <button className={styles.UserIcon} ><FaUserAlt></FaUserAlt> Community hub</button>
          </div>
        );
}

export default Nav;