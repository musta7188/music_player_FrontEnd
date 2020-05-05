import React, { useState, useEffect }from 'react';
import ReactSearchBox from 'react-search-box'
import SearchContainer from './SearchContainer'
import {connect} from 'react-redux'
 function Search(props) {
  const {classes} = props
  const {SongsSearched} = props

  const [value, setValue] = useState("")

  ///fetch from the api songs, artist or album matching the value of the input 
  const getSearchedItems = () => {

      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/track?q=${value}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf"
   } }).then(resp => resp.json()).then(obj => SongsSearched(obj.data))

  }


  const handelChance = (value) => {
    setValue(value)
    getSearchedItems()
  }


  return (
      <>
    <ReactSearchBox
          placeholder="Search Songs"
          onChange={(value) => handelChance(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value={value}
        />
        
        <br></br>
  
      <SearchContainer/>
        </>

  )

}

const mapDispatchToProps = dispatch => {
  return {
    SongsSearched: songs => dispatch({type: "SELECTED_SONGS", payload: {songs: songs}})
  }
}



export default connect(null, mapDispatchToProps) (Search);




