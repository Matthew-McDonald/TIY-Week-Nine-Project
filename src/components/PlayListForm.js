import React, { Component } from "react";

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: "",
    };
  }
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }

}




//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (dependin on the syntax you choose) will be comparable to this:
