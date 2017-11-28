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
	render(){
		return (
			<section>
				<Hello/>
			</section>
		)
	}
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
