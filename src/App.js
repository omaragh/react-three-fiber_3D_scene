import React from "react";

import styles from "./App.module.css";
import Nav from "./components/HeaderNav";
import SearchBar from "./components/SearchBar";
import CanvasField from "./components/Canvas";

class App extends React.Component { 


  render() {
    return (
      <div>
        <div className={styles.Nav}>
          <Nav></Nav>
        </div>
        
        <div className={styles.Content}>
        <SearchBar></SearchBar>
          <div>
            <CanvasField></CanvasField>
          </div>
        </div>
      </div>
    );
  }    
}

export default App;