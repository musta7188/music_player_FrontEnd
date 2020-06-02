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

   ///find the song with the id of the playlist and incase it has already an  attribute of songs it push the songs inside else  he add an attribute of songs
   ////and add the first song in that array 
    return{
      ...state,
      playList: state.playList.filter(play => play.id == action.payload.playlistID)[0].songs ?
       state.playList.filter(play => play.id == action.payload.playlistID)[0].songs.push(action.payload.song) : 
       state.playList.filter(play => play.id == action.payload.playlistID)[0]["songs"] = [action.payload.song],
       ...state,
       playList: state.playList
    }
  }
  if (action.type === "DELETE_SONG"){
    debugger
    return{
      ...state,
      playList: state.playList.filter( p => p.id == action.payload.playlistId)[0].songs.filter(s => s.id != action.payload.songId), 
      ...state,
    }
  }
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