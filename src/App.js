import React, { Component } from 'react';
import Table from './table.js';
import Form from './form.js';

class App extends Component {
	state = {
		colHeads : {login : 'login', avatar : 'avatar', name: 'name', company : 'company', location : 'location', type : 'type'},
		users : [],
		dir : 1
	};
	addNewUsers = (newUser) => {
		this.setState(prevState => ({users : prevState.users.concat(newUser)}));
	};
	comparator = (index, direction) => {
		if (typeof (this.state.users[0][index]) === 'string') {
			return function(a, b) {
				if (a[index] === null) {
					return direction;
				}
				if (b[index] === null) {
					return (-1 * direction);
				}
				let x = a[index].localeCompare(b[index]);
				if (x > 0) {
					return direction;
				} else if (x === 0) {
					return 0;
				} else {
					return (-1 * direction);
				}
			}
		} else {
			return function(a, b) {
				if (a[index] > b[index]) {
					return direction;
				} else if (a[index] === b[index]) {
					return 0;
				} else {
					return (-1 * direction);
				}
			}
		}
	};
	onSort = (index) => {
		if (this.state.users.length === 0) {
			return;
		}
		let n_users = this.state.users.sort(this.comparator(index, this.state.dir));
		this.setState({users : n_users});
		this.setState(prevState => ({dir : prevState.dir * -1}));
		// console.log(this.state.users);

		// take care of this
		// this.forceUpdate();
		// take care of this

	};
	render() {
		return(
			<div>
				This table contains the data from Github Users API.<br />
				<Form onSubmit = {this.addNewUsers} /><br />
				<Table colHeads = {this.state.colHeads} userList = {this.state.users} sorter = {this.onSort}/>
			</div>
		);
	};
}
export default App;
