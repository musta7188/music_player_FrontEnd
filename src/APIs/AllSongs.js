import React from "react";

function AllSongs() {
  return fetch("https://music-player-backend.herokuapp.com/songs").then((resp) => resp.json());
}

export default AllSongs;
