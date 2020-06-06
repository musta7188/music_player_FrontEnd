import React, { useState, useEffect } from "react";
import ReactSearchBox from "react-search-box";
import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";
import MicOffIcon from "@material-ui/icons/MicOff";
import MicIcon from "@material-ui/icons/Mic";
import {searchSong} from '../../APIs/API'
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

function SearchPage(props) {
  const { SongsSearched } = props;

  const [value, setValue] = useState("");

  const [listening, setListening] = useState(false);

  const getSearchedItems = (value) => {

    searchSong(value).then((obj) => {

      SongsSearched(obj.data)
    });
  };

  const handleListen = () => {
    listening ? recognition.start() : recognition.stop();
  };

  recognition.onresult = (e) => {
    handelChance(e.results[0][0].transcript);
  };

  const handelChance = (value) => {
    setValue(value);
    getSearchedItems(value);
  };

  return (
    <>
      <ReactSearchBox
        placeholder="Search Songs"
        onChange={(value) => handelChance(value)}
        fuseConfigs={{
          threshold: 0.05,
        }}
        value={value}
        id="speechinput"
        x-webkit-speech
      />

      <button
        onClick={() => {
          setListening(!listening);
          handleListen();
        }}
      >
        {listening ? <MicIcon /> : <MicOffIcon />}
      </button>

      <br></br>

      <SearchContainer />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    SongsSearched: (songs) =>
      dispatch({ type: "SELECTED_SONGS", payload: { songs: songs } }),
  };
};

export default connect(null, mapDispatchToProps)(SearchPage);
