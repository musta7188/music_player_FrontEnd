import React from 'react'

function AllSongs(){


     return fetch("http://localhost:3000/songs")
    .then(resp => resp.json())


}


export default AllSongs

