import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);

		console.log('constructor called');
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate', nextProps, nextState);
	    return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate',  nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate',prevProps, prevState);
	}

	componentWillUnmount(prevProps, prevState) {
		console.log('componentWillUnmount',prevProps, prevState);
	}

  	render() {
   		console.log('render');

	    return (
	      <h1 className="text-muted">Counter: {this.props.value}</h1>
	    );
  	}
}


export default Counter;