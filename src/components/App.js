import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";

import NavBar from "./NavBar.js";
import PlayListForm from "./PlayListForm.js";
import PlayList from "./PlayList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-lg playListForm">
            <PlayListForm />
          </div>
          <div className="col-lg">
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
