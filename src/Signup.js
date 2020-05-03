import React from "react";
import API from "./API";
import SignupForm from "./SignupForm";

export default class Signup extends React.Component {
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
		API.SignUp(this.state).then((json) => console.log(json));
	};

	render() {
		return (
			<SignupForm
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

