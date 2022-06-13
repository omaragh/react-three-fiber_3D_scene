import React from "react";

import styles from "./App.module.css";
import Nav from "./components/HeaderNav";
import CanvasField from "./components/Canvas";
import Hub from "./components/CommunityHub";
import LandingPageInfo from "./components/LandingPage";

class RenderPage extends React.Component{
  state = {currentPage: true}

 changePage = ()=>{
   if(this.state.currentPage){
    this.setState({currentPage: false})
   }else{
    this.setState({currentPage: true})
   }
 }
 render(){
  return (
    <>
    <div className={styles.Nav}>
          <Nav page={this.changePage} currentShow={this.state.currentPage} home={this.props.showHome}></Nav>
        </div>
        {this.state.currentPage?<div className={styles.Content} >
          <div>
            <CanvasField />
          </div>
        </div>:<Hub/>}
    </>
    )
  }
}
class App extends React.Component { 
  state = {homePage: true}
  changeHome = ()=>{
    if(this.state.homePage){
     this.setState({homePage: false})
    }else{
      this.setState({homePage: true})
    }
  }
  render() {
    return (
      <div>
        {this.state.homePage?<LandingPageInfo page={this.changeHome} currentShow={this.state.homePage}/>: <RenderPage showHome={this.changeHome}/>}
      </div>
    );
  }    
}

export default App;