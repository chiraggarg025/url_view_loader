import Login from "./Login";
import Main from "./Main";
import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      url1: "https://www.udayy.com/",
      url2: "https://ui.dev",
      isLoggedIn: false,
    };
  }
  // checking if user is logged in
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
    this.setState({ user: input.target.value });
  }
  // change state on login and storing in localstorage
  handleFormSubmit(user, email) {
    if (user === "") {
      alert("Enter user name");
      return;
    }
    if (email === "") {
      alert("Enter email ");
      return;
    }
    this.setState({ isLoggedIn: true });
    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
  }
  // changing the state when input is entered in first box
  handleURL1Change(event) {
    const input = event;

    this.setState({ url1: input.target.value });
  }
  // changing the state when input is entered in second box
  handleURL2Change(event) {
    const input = event;
    this.setState({ url2: input.target.value });
  }
  // logging out the user
  logoutUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    this.setState({
      user: "",
      email: "",
      isLoggedIn: false,
    });
  }
  render() {
    const { isLoggedIn, user, email, url1, url2 } = this.state;
    // conditional rendering on the login and main component
    return (
      <div>
        <Navbar
          user={user}
          isLoggedIn={isLoggedIn}
          handleURL1Change={this.handleURL1Change.bind(this)}
          handleURL2Change={this.handleURL2Change.bind(this)}
          logoutUser={this.logoutUser.bind(this)}
        />

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
