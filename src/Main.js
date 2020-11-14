import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css"
class Main extends Component {
  render() {
    const user = localStorage.getItem("user");
    return (
      <div className="main">
        
        
    <iframe width="100%"  src="http://codingninjas.in" frameborder="2" height="100%"></iframe>
      </div>
    );
  }
}

export default Main;
