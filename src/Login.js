import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  state = {
    user: "",
  };
  handleChange = (event) => {
    const input = event;
    console.log(input.target.value);
    this.setState({ user: input.target.value });
  };
  handleFormSubmit = () => {
    const { user } = this.state;
    console.log(user);
    localStorage.setItem("user", user);
  };
  render() {
    return (
      <div>
        <div className="container" id="box">
          <h1>
            <i className="fa fa-user"></i> Sign In
          </h1>
          <hr style={{ color: "white" }} />
          <div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={this.handleFormSubmit}
            >
              {" "}
              Sign In <i className="fa fa-sign-in"></i>
            </button>
            <p>
              <strong>or</strong>
            </p>
            <button className="btn btn-lg btn-danger btn-block">
              <i className="fa fa-google"></i> Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
