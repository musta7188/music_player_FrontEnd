import React,{useState, useEffect} from 'react'; 
import {connect}  from 'react-redux'
import PlaylistSongsContainer from "./PlaylistSongsContainer"

// make a functional component? 
function PlaylistShow({AllPlayList, match}) {


    
    const [playlistSongs, setplaylistSongs] = useState([])
    
    useEffect(() => {
const currentPlaylist = AllPlayList.filter(playlist => playlist.id === parseInt(match.params.id, 10))
setplaylistSongs(currentPlaylist[0])

    },[])

    const {songs} = playlistSongs
    
    
    
        return(
            <div>
            <h1>TEST</h1>
        {songs && <PlaylistSongsContainer  songs={songs } />  }
            </div>
        )
    


}

const mapStateToProps = state => {
    return {
      AllPlayList: state.playList
    }
  }


export default connect(mapStateToProps, null)(PlaylistShow)