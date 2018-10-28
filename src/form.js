import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
	state = {
		username : ''
	};
	submitButton = (event) => {
		event.preventDefault();
		axios.get(`https://api.github.com/users/${this.state.username}`)
			.then(result => {this.props.onSubmit(result.data)});
		this.setState({username : ''});
	};
	render() {
		return(
			<form onSubmit={this.submitButton}>
				<input type = 'text' required
					value = {this.state.username}
					onChange = {(event) => this.setState({username : event.target.value})}
					placeholder = 'username' />
				<button type = 'submit'>Add entry</button>
			</form>
		);
	};
};
export default Form;