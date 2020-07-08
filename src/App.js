import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./APIs/API";
import Signup from "./components/Authentication/Signup";
import { AllSongs } from "./APIs/API";
import { connect } from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import { withRouter } from "react-router-dom";


function App ({getSongs, setUser, getPlaylist, props, username}){
  

  useEffect(() => {

   checkToken();
    AllSongs().then(getSongs);
    getUserPlaylist()
  },)

  const getUserPlaylist = () => {
    if (localStorage.token) {
      API.getPlaylists(localStorage.token).then((obj) => {
        getPlaylist(obj);
      });
    }
  };

  const checkToken = () => {
    if (localStorage.token) {
      API.validate(localStorage.token).then((json) => {
        setUser(json.username)

        localStorage.token = json.token;
      });
    }
  };

  const logIn = (username, token) => {
    setUser(username)
   
    getUserPlaylist()

    localStorage.token = token;
    props.history.push("/songs");
  };

  const logOut = () => {
    setUser(null)
    
    props.getPlaylist([])
    localStorage.removeItem("token");
    props.history.push("sign-up");

  };



    return (
      <div className="App">
        {username ? (
          <Route
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                logOut={logOut}
                username={username}
              />
            )}
          />
        ) : (
          <>
            <Route
              exact
              path="/sign-up"
              component={() => <Signup logIn={logIn} />}
            />
            <Route
              exact
              path="/"
              component={() => <Login getUserPlaylist={getUserPlaylist} logIn={logIn} />}
            />
          </>
        )}
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: (songs) =>
      dispatch({ type: "SET_SONGS", payload: { songs: songs } }),
    getPlaylist: (playlist) =>
      dispatch({ type: "SET_PLAYLIST", payload: { playlist: playlist } }),
      setUser: user => dispatch({type: 'SET_USER', payload: {user}})
  };
};


const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
