import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="row navBar">
        <div className="col-sm logo">
            <img
              className="App-logo"
              src={require("../images/hulk-hogan-ear.jpg")}
            />
        </div>
        <div className="col-sm navTitle">
          <h1>Play What?!</h1>
        </div>
      </div>
    );
  }
}

export default NavBar;
