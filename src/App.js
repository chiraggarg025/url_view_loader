import Login from "./Login";
import Main from "./Main";
import Page404 from "./Page404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      url1: "",
      url2: "",
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    const user = localStorage.getItem("user");
    if (user != null) {
      this.setState({
        isLoggedIn: true,
        user:user
      });
    }
  }
  handleEmailChange(event) {
    const input = event;
    this.setState({ email: input.target.value });
  }
  handleNameChange(event) {
    const input = event;
    console.log(input.target.value);
    this.setState({ user: input.target.value });
  }
  handleFormSubmit(user, email) {
    console.log(user);
    if (user === "") {
      alert("Enter user name");
      return;
    }
    this.setState({ isLoggedIn: true });
    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
  }
  render() {
    const { isLoggedIn, user, email } = this.state;
    console.log(isLoggedIn);
    return (
      <div>
        <Navbar user = {user} isLoggedIn = {isLoggedIn}/>
        {!isLoggedIn ?
        <Login
        handleFormSubmit={this.handleFormSubmit.bind(this)}
        handleNameChange={this.handleNameChange.bind(this)}
        handleEmailChange={this.handleEmailChange.bind(this)}
        user={user}
        email={email}
      /> :
      <Main />}
        
      </div>
    );
  }
}

export default App;
