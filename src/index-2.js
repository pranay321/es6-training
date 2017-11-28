import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello </h1>
				<World/>
			</div>
		)
	}
}


class World extends React.Component{
	render(){
		return (
			<div>
				<h1>World</h1>
			</div>
		)
	}
}

class HelloWorld extends React.Component{
	constructor(){
		super();
		this.name = "shaadi";

		this.state = {
			name2: 'ajay',
		}
	}

	getName(){
		return "Pranay";
	}

	render(){
		return (
			<section>
				<Hello/>
				<input type="text" />
				<br/>
				{ 2 + 2}
				<br/>
				{this.getName()}
				<br/>
				{this.name}
				<br/>
				{this.state.name2}
			</section>
		)
	}
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
