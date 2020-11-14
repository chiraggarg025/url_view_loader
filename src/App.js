import Login from "./Login";
import Main from "./Main";
import Page404 from "./Page404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css"

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
        user: user,
      });
    }
  }
  // change state on entering email
  handleEmailChange(event) {
    const input = event;
    this.setState({ email: input.target.value });
  }
  // change state on entering name
  handleNameChange(event) {
    const input = event;
    console.log(input.target.value);
    this.setState({ user: input.target.value });
  }
  // change state on login and storing in localstorage
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
    const { isLoggedIn, user, email, url1, url2 } = this.state;
    console.log(isLoggedIn);
    // conditional rendering on the login and main component
    return (
      <div>
        <Navbar user={user} isLoggedIn={isLoggedIn} />

        {!isLoggedIn ? (
          <Login
            handleFormSubmit={this.handleFormSubmit.bind(this)}
            handleNameChange={this.handleNameChange.bind(this)}
            handleEmailChange={this.handleEmailChange.bind(this)}
            user={user}
            email={email}
          />
        ) : (
          <div className="views">
            <Main url={url1} />
            <Main url={url2} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
