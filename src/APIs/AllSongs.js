import React from "react";

function AllSongs() {
  return fetch("http://localhost:3001/songs").then((resp) => resp.json());
}

export default AllSongs;
