import React, { Component } from "react";

class PlayListItem extends Component {
  render() {
    let cards = this.props.songs.map(song => {
      return (
        <ul className = 'card' key={song.id}>
          <li>
            User Name: {song.userName}
          </li>
          <li>
            Artist/Band: {song.songArtist}
          </li>
          <li>
            Song Title: {song.songTitle}
          </li>
          <li>
            Notes about Song: {song.songNotes}
          </li>
        </ul>
      )
    })
    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default PlayListItem;
