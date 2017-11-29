import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoList extends Component{
	constructor(){
		super();

		this.state = {
			names: [
				'shaadi',
				'mauj',
				'fropper'
			],
		}
	}
	render(){
		return(
			<ul>
				{this.state.names.map((name,index) => <TodoItem items={name} key={index} />)}
			</ul>
		)
	}
}


class TodoItem extends Component{
	render(){
		return(
			<li>
				{this.props.items}
			</li>
		)
	}
}
ReactDOM.render(<TodoList/>, document.getElementById('root'));