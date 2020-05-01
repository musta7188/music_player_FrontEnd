import React, {useState, useEffect} from 'react';
import './App.css';
import AllSongs from  './APIs/AllSongs'
import {connect} from 'react-redux'
function App({getSongs}) {


  useEffect(() => {
      AllSongs().then(getSongs)
  })


  return (
    <div className="App">
    </div>
  );
}


const mapDispatchToProps = dispatch =>{
  return{
    getSongs: songs => dispatch({ type: "SET_SONGS", payload: {songs: songs}})
  }
}


export default connect(null, mapDispatchToProps) (App)
