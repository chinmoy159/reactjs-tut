import React from 'react';

const TableRow = (props) => {
	return(
		<tr>
			<td>{props.login}</td>
			<td><img src = {props.avatar_url} alt = {props.login} width = '75'/></td>
			<td>{props.name}</td>
			<td>{props.company}</td>
			<td>{props.location}</td>
			<td>{props.type}</td>
		</tr>
	);
};


const ColHeader = (props) => {
	return(
		<tr>
			<th style = {{cursor : 'pointer'}} onClick = {() => {props.sorter('login')}}>{props.login}</th>
			<th>{props.avatar}</th>
			<th style = {{cursor : 'pointer'}} onClick = {() => {props.sorter('name')}}>{props.name}</th>
			<th style = {{cursor : 'pointer'}} onClick = {() => {props.sorter('company')}}>{props.company}</th>
			<th style = {{cursor : 'pointer'}} onClick = {() => {props.sorter('location')}}>{props.location}</th>
			<th style = {{cursor : 'pointer'}} onClick = {() => {props.sorter('type')}}>{props.type}</th>
		</tr>
	);
};

class Table extends React.Component {
	render() {
		return(
			<table style = {{border:'1px solid black'}}>
				<tbody>
					<ColHeader login = {this.props.colHeads.login} avatar = {this.props.colHeads.avatar} name = {this.props.colHeads.name} company = {this.props.colHeads.company} location = {this.props.colHeads.location} type = {this.props.colHeads.type} sorter = {this.props.sorter} />
					{this.props.userList.map(user => <TableRow key = {user.id} login = {user.login} avatar_url = {user.avatar_url} name = {user.name} company = {user.company} location = {user.location} type = {user.type} /> )}
				</tbody>
			</table>
		);
	}
};

export default Table;