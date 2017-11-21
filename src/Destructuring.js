import React, { Component } from 'react';

class Destructuring extends Component {
  constructor(props){
    super(props);

    //example 1 - old way in javascript 
    console.log('--------example 1 -----------');
    
   const person = {
      first: 'pranay',
      last: 'mhatre',
      country: 'india',
      city: 'thane',
    };

    const first = person.first;
    const last = person.last;
	
	console.log(first, last);


    //using destructuring
    // const { first, last } = person;

    // console.log(first, last);

	console.log('--------example 2 -----------');
    

	const apiData = {
      first: 'pranay',
      last: 'mhatre',
      links: {
        social: {
          twitter: 'https://twitter.com/pranay',
          facebook: 'https://facebook.com/pranay',
        },
        web: {
          blog: 'https://pranaym.com'
        }
      }
    };
    const twitter = apiData.links.social.twitter;
    const facebook = apiData.links.social.facebook;

    //const { twitter, facebook } = apiData.links.social;

    console.log(twitter, facebook );

    //renaming variable

    const { twitter: tweet, facebook: fb } = apiData.links.social;

    console.log(tweet, fb );

    console.log('--------example 3 -----------');

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

export default Destructuring;



