import React from "react";
import API from "../../APIs/API";
import SignupForm from "./SignupForm";
import { withRouter } from "react-router-dom";

class Signup extends React.Component {
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

		API.signUp(this.state).then((data) => {
			if(data.error){
				alert(data.error[0])
			} else{
			this.props.logIn(data.username, data.token)
			}
		});
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

export default withRouter(Signup);
