const initialState = {
  songs: []
}


const reducer = (state = initialState, action) =>{

  if(action.type === "SET_SONGS"){
    return{
      ...state,
      songs: action.payload.songs
    }
  }

  return state 
}

export default reducer