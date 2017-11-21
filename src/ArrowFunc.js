import React, { Component } from 'react';

class ArrowFunc extends Component {
  constructor(props){
    super(props);

    //example 1 - combined array which gives array in array
    console.log('--------example 1 -----------');
    
    // function add(a,b){
    // 	return a + b;
    // }
    // console.log(add(5,6));

    //using arrow function
 //    const add = (a,b) => {
 //    	return a + b;
 //    }

    const add = (a,b) => (a + b);
	
	console.log(add(5,6));

	console.log('--------example 2 -----------');
    

	function calculateBill(total, tax, tip) {
        if(tax === undefined) {
            tax = 0.13;
        }
        if(tip === undefined) {
            tip = 0.15;
            }
        return total + (total * tax) + (total * tip);
    }

    const totalBill = calculateBill(100);
    console.log(totalBill);

    // const calculateBill = (total, tax, tip) => {
    // 	 return total + (total * (tax || 0.13)) + (total * ( tip || 0.15));
    // }

    // const totalBill = calculateBill(100);
    // console.log(totalBill);

    console.log('--------example 3 -----------');

    // function phraseSplitting(phrase){
    // 	return phrase.split(" ");
    // }

    const phraseSplitting = phrase => phrase.split(" ");
    console.log(phraseSplitting("react training"));

    //with no parameter
	    // function show(){
    // 	console.log(document);
    // }

    const show = () => document;
    console.log(show());

    console.log('--------example 5 -----------');

    const smartPhones = [
		    { name:'iphone x', price:79999 },
		    { name:'iphone 8', price: 60000 },
		    { name:'iphone 7', price: 45000 }
		];


	const price = smartPhones.map(smartPhone => smartPhone.price); 
	console.log(price);


	console.log('--------example 5 -----------');

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


	const result = arr.filter(eachNum => eachNum % 3 === 0); 
	console.log(result);






  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default ArrowFunc;

//https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

