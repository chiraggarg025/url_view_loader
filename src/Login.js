import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  render() {
    const { user, email } = this.props;
    // Login component
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
                  <i className="fa fa-key"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => this.props.handleNameChange(e)}
                required
              />
            </div>
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
                aria-label="UserEmail"
                aria-describedby="basic-addon1"
                onChange={(e) => this.props.handleEmailChange(e)}
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
              className="btn btn-danger btn-lg btn-block"
              onClick={() => this.props.handleFormSubmit(user, email)}
            >
              {" "}
              Sign In <i className="fa fa-sign-in"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
