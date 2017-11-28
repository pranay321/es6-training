import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
	constructor(props){
		super(props);

		console.log(this.props);
	}
	render(){
		return (
			<div>
				<h1>Hello</h1>
				<World/>
			</div>
		)
	}
}


// const Hello = (props) => (
// 	<div>
// 		<h1>Hello {props.name}</h1>
// 	</div>
// )

class World extends React.Component{
	render(){
		return (
			<div>
				<h1>World</h1>
			</div>
		)
	}
}

class HelloWorld extends React.Component {
	render(){
		return (
			<section>
				<Hello name="pranay"/>
			</section>
		)
	}
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
