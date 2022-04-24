import React from "react";

import styles from "./HeaderNav.module.css"
import {FaUserAlt} from 'react-icons/fa';

function Nav(){
        return (
          <div>
            <button className={styles.UserIcon} ><FaUserAlt></FaUserAlt>Log in</button>
          </div>
        );
}

export default Nav;