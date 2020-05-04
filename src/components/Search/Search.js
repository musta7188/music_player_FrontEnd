import React, { useState, useEffect }from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import ReactSearchBox from 'react-search-box'


 function Search(props) {
  const {classes} = props

  const [value, setValue] = useState("")

  const getSearchedItems = () => {
      // console.log(value)

      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/track?q=${value}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf"
   } }).then(resp => resp.json()).then(obj => console.log(obj.data))

  }



  return (
      <>
    <ReactSearchBox
          placeholder="Search Songs"
          // data={data}
          onSelect={record => console.log()}
          onFocus={() => {
            console.log('This function is called when is focussed')
          }}
          onChange={(value) => setValue(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value={value}
        />
      <button type="submit" onClick={getSearchedItems()}>Submit</button>
        </>

  )

}



export default Search;




