import React from "react";
import API from "../../APIs/API";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
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

		API.logIn(this.state).then((data) =>
			{
				if(data.error){
					alert(data.error)
				} else {
				this.props.logIn(data.username, data.token)
				}

			}
			// 
		);
	
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

export default withRouter(Login);
