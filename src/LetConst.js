import React, { Component } from 'react';

class LetConst extends Component {
  constructor(props){
    super(props);

    //example 1 - var can update and redefined
    console.log('--------example 1 -----------');
    var width = 100;
	console.log(width); // 100
	width = 200;
	console.log(width); // 200

	//example 2 - scope of var
	console.log('--------example 2 -----------');
	function setWidth() {
	  var width = 100;
	  console.log(width);
	}
	setWidth();

	//example 3 - block scope of var
	console.log('--------example 3 -----------');
	var age = 26;
	if(age > 18) {
	  var yearsOld = age + 2;
	  console.log(`You are ${yearsOld} yrs old, Now you can marry`);
	}
	console.log(yearsOld);


	//example 4 - block scope of let/const
	console.log('--------example 4 -----------');
	var currentAge = 26;
	if(currentAge > 18) {
	  let yrsOld = currentAge + 2; // you can use const also
	  console.log(`You are ${yrsOld} yrs old, Now you can marry`);
	}
	//console.log(yrsOld);


	//example 5 - redeclare same variable let/const for same scope
	// console.log('--------example 5 -----------');
	// const key = 'abc123';
	// let points = 50;
	// let winner = false;

	//let points = 60;

	//example 6 - redeclare same variable let/const for same scope
	console.log('--------example 6 -----------');
	let points = 50;
	let winner = false;

	if(points > 40) {
	   let winner = true
	   console.log(winner);
	}
	console.log(winner);

	//example 7 - we can update let variable
	console.log('--------example 7 -----------');
	let pnts = 50;

	pnts = 60;

	console.log(pnts);


	//example 8 - we can not update const variable
	console.log('--------example 8 -----------');
	const newpnts = 50;

	//newpnts = 60;

	console.log(newpnts);


	//example 9 - we can update update object defined using const variable value but not whole object
	 console.log('--------example 9 -----------');
	 const person = {
	 	first: 'pranay',
	 	last: 'mhatre'
	 }

	 // person.first = 'shaadi.';
	 // person.last = 'com';

	 // console.log(person);


	 //  const person = {
	 // 	first: 'shaadi.',
	 // 	last: 'com'
	 // }

	 console.log(person);




	// pnts = 60;

	// console.log(pnts);




  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default LetConst;
