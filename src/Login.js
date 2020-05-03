import React from "react";
import API from "./API";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
	
		API.LogIn(this.state)
			
			.then((json) => this.props.LogIn(json.username, json.token));
		// .then(json => console.log(json))
	};

	render() {
		return (
			<div>
				<LoginForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}
