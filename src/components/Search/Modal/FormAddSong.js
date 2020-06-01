import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {connect } from 'react-redux'
import API from '../../../APIs/API'



function FormAddSong({AllPlayList, song, removeSong}) {
  const [playList, setPlayList] = React.useState("");

  const handleChange = (event) => {
    setPlayList(event.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault()
 const  data = {
    title: song.title,
    artist: song.artist.name,
    album: song.album.title,
    artist_img: song.artist.picture,
    album_img: song.album.cover,
    song_link: song.preview
  }
API.createSong(data).then(songObj => {
  API.createPlayListSong({song_id: songObj.id, playlist_id: playList}).then(obj => removeSong(obj.song, obj.playlist.id))

})

}

////:artist, :album, :artist_img, :album_img, :song_link)

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl >
        <InputLabel id="demo-simple-select-autowidth-label">
          PlayList
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={playList}
          onChange={handleChange}
          autoWidth
        >

        {AllPlayList.map(playL => <MenuItem value={playL.id}>{playL.name}</MenuItem> )}
          
        </Select>
        <FormHelperText>Select A Playlist</FormHelperText>
        <button type="submit" > Add</button>
      </FormControl>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    AllPlayList: state.playList
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    removeSong: (song, playlistID) => dispatch({ type: "ADD_SONG", payload: {song: song, playlistID: playlistID}})
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (FormAddSong);
