import { CardActionArea } from "@material-ui/core"

const initialState = {
  songs: [],
  playingSong: "",
  selectedSongs: null
}


const reducer = (state = initialState, action) =>{

  if(action.type === "SET_SONGS"){
    return{
      ...state,
      songs: action.payload.songs
    }
  }else if(action.type === "PLAY_SONG"){
    return{
      ...state,
      playingSong: action.payload.link
    }
  }else if(action.type === "SELECTED_SONGS"){
    return {
      ...state,
      selectedSongs: action.payload.songs
    }
  }

  return state 
}

export default reducer