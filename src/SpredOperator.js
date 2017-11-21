import React, { Component } from 'react';

class SpredOperator extends Component {
  constructor(props){
    super(props);

    //example 1 - combined array which gives array in array
    console.log('--------example 1 -----------');
    const middle = [3, 4];
	const arr = [1, 2, middle, 5, 6];
	console.log(arr);
	// [1, 2, [3, 4], 5, 6]

	const arrRes = [1, 2, ...middle, 5, 6];
	console.log(arrRes);


    console.log('--------example 2 -----------');
    const arr1 = ['two', 'three'];
	const arr2 = ['one', ...arr1, 'four', 'five'];
	console.log(arr2); // 200

	//example 3 - merge two array
	console.log('--------example 3 -----------');
	const arr3 = ['two', 'three','four'];
	const arr4 = ['five', 'six', 'seven'];
	const finalRes = [...arr3,...arr4];
	console.log(finalRes); // 200

	//example 4 - math function
	console.log('--------example 4 -----------');
	const arr5 = [ 5, 8, 10, 3, 1];
	console.log(Math.min(...arr5));
	console.log(Math.max(...arr5));

 	//example 5 - string to array
 	var str = "hello";
	var chars = [...str];
	console.log(chars); 

	console.log('--------example 5 -----------');
	//example 6 - rest parameter handling
	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	let [ a, b, ...c ] = [ 10, 20, 30, 40, 50, 60 ];
	console.log(x); 
	console.log(y); 
	console.log(z); 
	console.log(a, b, c);


	console.log('--------example 6 -----------');
	const person = {
		first: 'welcome',
		last: 'react',
	};

	const people = {
		...person,
		last: 'redux'
	}

	console.log(people);




  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default SpredOperator;
