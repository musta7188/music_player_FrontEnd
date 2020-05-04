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
        this.logIn(json.username, json.token)
      );
    }
  };

  logIn = (username, token) => {
    this.setState({
      username,
    });

    localStorage.token = token;
  };

  logOut = () => {
    this.setState({
      username: null
    })
    localStorage.removeItem("token")
  }
  
  render() {

    const {username} = this.state
    return (
      <div className="App">
        {
        username 
        ? 
        <Router>
        <Route exact path="/home" component={() => <HomePage logOut={this.logOut}/>} /> 
        </Router>
        : 
        <Router>
        <Route exact path="/sign-up" component={() => <Signup logIn={this.logIn} username={this.state.username} />} />
        <Route
          exact
          path="/log-in"
          component={() => <Login logIn={this.logIn} />}
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
