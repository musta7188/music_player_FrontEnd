import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PlaylistSongsContainer from "./PlaylistSongsContainer";

// make a functional component?
function PlaylistShow({ AllPlayList, match }) {
  const [playlistSongs, setPlaylistSongs] = useState(null);


  
  useEffect(() => {
    const currentPlaylist = AllPlayList.filter(
      (playlist) => playlist.id === parseInt(match.params.id, 10)
    );
    setPlaylistSongs(currentPlaylist[0]);
  }, []);




  return (


    <div>
      <h1>TEST</h1>

      {playlistSongs &&  <PlaylistSongsContainer songs={playlistSongs.songs} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    AllPlayList: state.playList
  };
};

export default connect(mapStateToProps, null)(PlaylistShow);
