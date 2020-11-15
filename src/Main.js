import React, { Component } from "react";
import "./App.css";
// main view component
class Main extends Component {
  render() {
    const user = localStorage.getItem("user");
    const url = this.props.url;
    return (
      <div className="main">
        <iframe width="100%" src={url} frameborder="2" height="100%"></iframe>
      </div>
    );
  }
}

export default Main;
