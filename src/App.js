import React from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./APIs/API";
import Signup from "./components/Authentication/Signup";
import { AllSongs } from "./APIs/API";
import { connect } from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    this.checkToken();
    AllSongs().then(this.props.getSongs);
    this.getUserPlaylist();
  }

  getUserPlaylist = () => {
    if (localStorage.token) {
      API.getPlaylists(localStorage.token).then((obj) => {
        this.props.getPlaylist(obj);
      });
    }
  };

  checkToken = () => {
    if (localStorage.token) {
      API.validate(localStorage.token).then((json) => {
        this.setState({
          username: json.username,
        });

        localStorage.token = json.token;
      });
    }
  };

  logIn = (username, token) => {
    this.setState({
      username,
    });

    localStorage.token = token;
    this.props.history.push("/songs");
  };

  logOut = () => {
    this.setState({
      username: null,
    });
    localStorage.removeItem("token");
    this.props.history.push("sign-up");
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        {username ? (
          <Route
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                logOut={this.logOut}
                username={this.state.username}
              />
            )}
          />
        ) : (
          <>
            <Route
              exact
              path="/sign-up"
              component={() => <Signup logIn={this.logIn} />}
            />
            <Route
              exact
              path="/"
              component={() => <Login logIn={this.logIn} />}
            />
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: (songs) =>
      dispatch({ type: "SET_SONGS", payload: { songs: songs } }),
    getPlaylist: (playlist) =>
      dispatch({ type: "SET_PLAYLIST", payload: { playlist: playlist } }),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(App));
