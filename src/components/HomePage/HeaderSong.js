import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { connect } from "react-redux";

function HeaderSong({ playingSong }) {
  const [songToPlay, setSongToPlay] = useState("");

  useEffect(() => {
    setSongToPlay(playingSong);
  }, [playingSong]);

  ////https://www.npmjs.com/package/react-h5-audio-player
  return (
    <AudioPlayer
      autoPlay
      src={songToPlay}
      onPlay={(e) => console.log("onPlay")}
      loop={true}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    playingSong: state.playingSong,
  };
};
export default connect(mapStateToProps)(HeaderSong);
