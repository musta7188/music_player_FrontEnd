const initialState = {
  songs: [],
  playingSong: ""
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
      playingSong: action.payload.song.song_link
    }
  }

  return state 
}

export default reducer