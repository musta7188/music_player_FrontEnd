import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./API";
import Signup from "./Signup";
import AllSongs from "./APIs/AllSongs";
import { connect } from "react-redux";
import HomePage from "./components/HomePage/HomePage";
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
  }

  checkToken = () => {
    if (localStorage.token) {
      API.validate(localStorage.token).then((json) =>
        this.LogIn(json.username, json.token)
      );
    }
  };

  LogIn = (username, token) => {
    this.setState({
      username,
    });

    localStorage.token = token;
  };

  render() {

    const {username} = this.state
    return (
      <div className="App">
        {
        username 
        ? 
        <HomePage/> 
        : 
        <Router>
        <Route exact path="/sign-up" component={() => <Signup />} />
        <Route
          exact
          path="/log-in"
          component={() => <Login LogIn={this.LogIn} />}
        /> 
       </Router>
        }

    
       
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: (songs) =>
      dispatch({ type: "SET_SONGS", payload: { songs: songs } }),
  };
};

export default connect(null, mapDispatchToProps)(App);
