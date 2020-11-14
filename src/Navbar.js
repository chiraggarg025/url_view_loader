import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Navbar as NavbarBootStrap,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
// navbar component
function Navbar({
  user,
  isLoggedIn,
  handleURL1Change,
  handleURL2Change,
  logoutUser,
}) {
  return (
    <div>
      {/* <div className="" style={{ backgroundColor: "#e3f2fd", width: "100%" }}>
        <h1 className="text-muted">
          {" "}
          {isLoggedIn ? <span>{user}</span> : "Hello!"}
        </h1>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
         
          <div className="collapse navbar-collapse" id="navbarcollapse">
            <ul className="navbar-nav justify-content-between w-100">
              <li>
                <span className="nav-link active">Home</span>
              </li>
              <li>
                {isLoggedIn ? (
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter your first URL"
                    aria-label="Search"
                    onChange={(e) => handleURL1Change(e)}
                  />
                ) : (
                  "Magic box 1"
                )}
              </li>
              <li>
                {isLoggedIn ? (
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter your Second URL"
                    aria-label="Search"
                    onChange={(e) => handleURL2Change(e)}
                  />
                ) : (
                  "Magic Box 2"
                )}
              </li>
              <li>
                {isLoggedIn && (
                  <span
                    onClick={() => logoutUser()}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </span>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      <NavbarBootStrap bg="light" expand="lg">
  <NavbarBootStrap.Brand href="#home" style={{marginRight:"10%"}}>{isLoggedIn ? <span>{user}</span> : "Hello!"}</NavbarBootStrap.Brand>
  <NavbarBootStrap.Toggle aria-controls="basic-navbar-nav" />
  <NavbarBootStrap.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{width:"100%",padding:"1%"}}>
      <ul className="navbar-nav justify-content-between w-100">
              {/* <li>
                <span className="nav-link active">Home</span>
              </li> */}
              <li>
                {isLoggedIn ? (
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter your first URL"
                    aria-label="Search"
                    onChange={(e) => handleURL1Change(e)}
                  />
                ) : (
                  "Magic box 1"
                )}
              </li>
              <li>
                {isLoggedIn ? (
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Enter your Second URL"
                    aria-label="Search"
                    onChange={(e) => handleURL2Change(e)}
                  />
                ) : (
                  "Magic Box 2"
                )}
              </li>
              <li>
                {isLoggedIn && (
                  <span
                    onClick={() => logoutUser()}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </span>
                )}
              </li>
            </ul>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </NavbarBootStrap.Collapse>
</NavbarBootStrap>
    </div>
  );
}

export default Navbar;
