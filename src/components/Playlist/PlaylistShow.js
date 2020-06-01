import React, { useState, useEffect } from "react";
import PlaylistSongsContainer from "./PlaylistSongsContainer";
import API from "../../APIs/API";
// make a functional component?
function PlaylistShow({ match }) {
  const [playlistSongs, setPlaylistSongs] = useState(null);

  useEffect(() => {
    API.getSelectedPlaylist(match.params.id).then((playlistObj) =>
      setPlaylistSongs(playlistObj)
    );
  },[]);

  return (
    <div>
      <h1>{playlistSongs && playlistSongs.name}</h1>

      {playlistSongs && <PlaylistSongsContainer songs={playlistSongs.songs} />}
    </div>
  );
}

export default PlaylistShow;
