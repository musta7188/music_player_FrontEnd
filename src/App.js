import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./API";
import Signup from "./Signup";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: null,
		};
	}

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token)
			.then((json) => this.LogIn(json.username, json.token));
		}
	}

	LogIn = (username, token) => {
		this.setState({
			username,
		});

		localStorage.token = token;
	};

	render() {
		return (
			<div className="App">
				

      	<Router>
					<Route exact path="/sign-up" component={() => <Signup />} />
          
					<Route
						exact
						path="/log-in"
						component={() => <Login LogIn={this.LogIn} />}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
