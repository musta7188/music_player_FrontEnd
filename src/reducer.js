import { CardActionArea } from "@material-ui/core";

const initialState = {
  songs: [],
  playingSong: "",
  selectedSongs: null,
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