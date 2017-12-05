import React, { Component } from 'react';
import Counter from './Counter';
import PropsValidator from './PropsValidator';
import './App.css';

class Application extends Component{
	constructor(){
		super();

		this.state = {
			counter: 0,
			isCounterHidden: true,
		}
		this.toggleCounter = this.toggleCounter.bind(this);
		this.incrementCounter = this.incrementCounter.bind(this);

	}

	 toggleCounter() {
	    this.setState({
	      isCounterHidden: ! this.state.isCounterHidden
	    });
	  }

	  incrementCounter() {
	    this.setState({
	      counter: this.state.counter + 1
	    });
	  }


	render(){
	    const style = {
	      marginTop: '40px',
	      marginBottom: '10px'
	    };

	    return (
	      <div className="App">
	        <div className="row">
	          <div className="col-sm-6 col-sm-offset-3 text-center">

	            <p style={style}> Console before you click anything.</p>

	            <div className="btn-group btn-group-lg" role="group" aria-label="..." style={style}>
	              <button type="button" className="btn btn-default" onClick={this.toggleCounter}>{this.state.isCounterHidden ? 'Show' : 'Hide'}</button>
	              <button type="button" className="btn btn-success" onClick={this.incrementCounter}>Increment</button>
	            </div>
	            { this.state.isCounterHidden ? null : <Counter value={this.state.counter} abc="abc"/> }
	            <PropsValidator/>
	          </div>
	        </div>
	      </div>
	    );
	}
}

export default Application;
