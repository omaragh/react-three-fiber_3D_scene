import React from "react";

import styles from "./App.module.css";
import Nav from "./components/HeaderNav";
import SearchBar from "./components/SearchBar";
import CanvasField from "./components/Canvas";
import Hub from "./components/CommunityHub";

class App extends React.Component { 
 state = {currentPage: true}

 changePage = ()=>{
   if(this.state.currentPage){
     console.log("klik")
    this.setState({currentPage: false})
   }else{
    console.log("kliked")
    this.setState({currentPage: true})
   }
   
 }
  render() {
    return (
      <div>
        <div className={styles.Nav}>
          <Nav page={this.changePage} currentShow={this.state.currentPage}></Nav>
        </div>
        
        {this.state.currentPage?<div className={styles.Content}>
        <SearchBar></SearchBar>
          <div>
            <CanvasField />
          </div>
        </div>:<Hub/>}
      </div>
    );
  }    
}

export default App;