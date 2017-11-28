import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PureComponentSample extends Component{
	constructor(){
		super();

		this.state = {
			count: 0
		}
	}
	render(){
		return(
			<button
			onClick={() => this.setState({count: this.state.count + 1}) }
			>
			 Count: {this.state.count}
			</button>
		)
	}
}


export default PureComponentSample;