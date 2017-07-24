import React, { Component } from "react";
import PlayListItem from './PlayListItem.js';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {songs: []};
    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {return results.json()})
    .then(data => this.setState({songs: data})
          // console.log("state", this.state.songs);
        )
        .catch(err => {
          console.log("There was an error importing song data:", err);
        });
  }
  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

  render() {
    console.log("Made it this far", this.state.songs);
    return(
      <div>
        <button onCLick={this.fetchData}>Update List</button>
        <PlayListItem songs={this.state.songs} />
      </div>
    )
  }
}

export default PlayList;
