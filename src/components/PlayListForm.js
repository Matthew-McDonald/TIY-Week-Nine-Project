import React, { Component } from "react";

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleSongTitleChange = this.handleSongTitleChange.bind(this);
    this.handleSongNotesChange = this.handleSongNotesChange.bind(this);
    this.addToList = this.addToList.bind(this);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    };
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
  }
  handleArtistChange(event) {
    this.setState({ songArtist: event.target.value });
  }
  handleSongTitleChange(event) {
    this.setState({ songTitle: event.target.value });
  }
  handleSongNotesChange(event) {
    this.setState({ songNotes: event.target.value });
  }

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
    console.log(this.userName);
    console.log(this.songNotes);
  };
  render() {
    return (
      <div className="col-lg">
        <form onSubmit={this.addToList}>
          <label>
            <input
              className="textArea"
              onChange={this.handleUserNameChange}
              userName="userName"
              type="text"
              value={this.state.userName}
              placeholder="Username"
            />
          </label>
          <br />
          <label>
            <input
              className="textArea"
              onChange={this.handleArtistChange}
              songArtist="songArtist"
              type="text"
              value={this.state.songArtist}
              placeholder="Artist/Band"
            />
          </label>
          <br />
          <label>
            <input
              className="textArea"
              onChange={this.handleSongTitleChange}
              songTitle="songTitle"
              type="text"
              value={this.state.songTitle}
              placeholder="Song Title"
            />
          </label>
          <br />
          <label>
            <input
              className="songNoteTextArea"
              onChange={this.handleSongNotesChange}
              songNotes="songNotes"
              type="text"
              value={this.state.songNotes}
              placeholder="Song Notes"
            />
          </label>

          <br />
          <div className="submitButton">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayListForm;

//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (dependin on the syntax you choose) will be comparable to this:
