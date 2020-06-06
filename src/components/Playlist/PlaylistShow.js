import React, { useState, useEffect } from "react";
import PlaylistSongsContainer from "./PlaylistSongsContainer";
import API from "../../APIs/API";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
function PlaylistShow({ match, setSelectedPlaylist }) {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    API.getSelectedPlaylist(match.params.id).then((playlistObj) => {
      setPlaylist(playlistObj);
      setSelectedPlaylist(playlistObj);

    });
  }, []);

  return (
    <div>
      <h1>{playlist && playlist.name}</h1>

      {playlist && playlist.songs.length === 0 && (
        <>
          <h3>You do not have any song</h3>
          <Link to={"/search"}>
            <Button variant="contained" color="primary">
              add some songs
            </Button>
          </Link>
        </>
      )}
      {<PlaylistSongsContainer />}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPlaylist: (playlist) =>
      dispatch({ type: "ADD_SELECTED_PLAYLIST", payload: { playlist } }),
  };
};

export default connect(null, mapDispatchToProps)(PlaylistShow);
