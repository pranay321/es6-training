import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoList extends Component{
	constructor(){
		super();

		this.state = {
		tasks: [{
				name: 'react component',
				completed: false,
			},
			{
				name: 'state and props',
				completed: false,
			},
			{
				name: 'event handling',
				completed: false,
			}],
		};

		this.toggleTodo = this.toggleTodo.bind(this);
	}

	toggleTodo(index){
		 const tasks = this.state.tasks;
		 const task = tasks[index];
		 task.completed = !task.completed;
		 this.setState({
		 	tasks:tasks,
		 });
	}


	render(){
		return(
			<div>
				<ul>
					{this.state.tasks.map((task,index) => <TodoItem items={task} key={index} clickHandler={this.toggleTodo} index={index} />)}
				</ul>
				<br/>
			</div>
		)
	}
}


class TodoItem extends Component{
	render(){
		return(
			<li onClick={() => this.props.clickHandler(this.props.index)} className={this.props.items.completed ? 'completed' : ''}>
				{this.props.items.name}
			</li>
		)
	}
}
ReactDOM.render(<TodoList/>, document.getElementById('root'));