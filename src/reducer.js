import { CardActionArea } from "@material-ui/core";

const initialState = {
  songs: [],
  playingSong: "",
  selectedSongs: null,
  playList:[]
};



const reducer = (state = initialState, action) => {


  if (action.type === "SET_SONGS") {
    return {
      ...state,
      songs: action.payload.songs,
    };
  }
  if (action.type === "PLAY_SONG") {
    return {
      ...state,
      playingSong: action.payload.link,
    };
  }
  if (action.type === "SELECTED_SONGS") {
    return {
      ...state,
      selectedSongs: action.payload.songs,
    };
  }
  if (action.type === 'SET_PLAYLIST') {
    return {
      ...state,
      playList: action.payload.playlist

    }
  }
  if (action.type ===  "ADD_PLAYLIST"){
    return {
      ...state,
      playList: [...state.playList, action.payload.playlist]
    }
  }
  if (action.type === "REMOVE_PLAYLIST"){
    return{
      ...state,
      playList: state.playList.filter(playL => playL.id !== action.payload.playlistID)
    }
  }
  if (action.type === "ADD_SONG"){

    debugger
    return{
      ...state,
      playList: state.playList.filter(play => play.id == action.payload.playlistID)[0].songs ?
       state.playList.filter(play => play.id == action.payload.playlistID)[0].songs.push(action.payload.song) : 
       state.playList.filter(play => play.id == action.payload.playlistID)[0]["songs"] = [action.payload.song],
       ...state,
       playList: state.playList
    }
  }
///action.payload.playlistID ///action.payload.song
  return state;
};

export default reducer;



// const setState = (actionType, propertyState) => {
//   deb
//   if (action.type === actionType) {
//     return {
//       ...state,
//       propertyState
//     };
//   }
// };



// setState("SET_SONGS", {songs: action.payload.songs})