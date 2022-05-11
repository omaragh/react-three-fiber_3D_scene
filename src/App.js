import React from "react";

import styles from "./App.module.css";
import Nav from "./components/HeaderNav";
import SearchBar from "./components/SearchBar";
import CanvasField from "./components/Canvas";
// import AnimationList from "./components/LoadAnimations";
class App extends React.Component { 
  // state = {
  //   newAnim: null
  // }
  // updateCurrentAnim = (animData)=>{
  //   this.setState({newAnim: animData})
  // }
  render() {
    return (
      <div>
        <div className={styles.Nav}>
          <Nav></Nav>
        </div>
        <div className={styles.Content}>
        <SearchBar></SearchBar>
          <div>
            <CanvasField />
          </div>
          <div>
            {/* <AnimationList runFunc={this.updateCurrentAnim}/> */}
          </div>
          
        </div>
      </div>
    );
  }    
}

export default App;