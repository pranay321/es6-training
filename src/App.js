import React, { Component } from 'react';
import './App.css';
import LetConst from './LetConst';
import SpredOperator from './SpredOperator';
import ArrowFunc from './ArrowFunc';
import Destructuring from './Destructuring';
import UpgradeBanner from './UpgradeBanner';
import UpgradeBannerStatic from './UpgradeBannerStatic';
import PureComponentSample from './PureComponentSample';


class App extends Component {
  constructor(props){
    super(props);

    //string fuction used in shaadi react

    const msg = "Hello, Welcome to shaadi react";

    const arrData = ["one","two","three","four"];

    // console.log("1 - ",msg.startsWith("Hello"));

    // console.log("2 - ",msg.endsWith("react"));

    // console.log("3 - ",arrData.includes("three"));

    //template literals


    

   // console.log(`Hello ${name || `pranay`}`);



    // function calculateBill(total, tax, tip) {
    //     if(tax === undefined) {
    //         tax = 0.13;
    //     }
    //     if(tip === undefined) {
    //         tip = 0.15;
    //         }
    //     return total + (total * tax) + (total * tip);
    // }

    // const totalBill = calculateBill(100);
    // console.log(totalBill);


    //with default argument

    function calculateBill(total, tax, tip) {
        return total + (total * (tax || 0.13)) + (total * (tip || 0.15));
    }

    const totalBill = calculateBill(100);
    console.log(totalBill);


  }
  render() {
    const letconst = false;
    const spredOperator = false;
    const arrowFunc = false;
    const destructuring = false;
    const msg2 = `Hello ${this.props.name || `pranay`}`;
    const upgradebannerstatic = false;
    const upgradebanner = false;
    const prComponent = true;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{msg2}</h1>
        { letconst && <LetConst/>}
        { spredOperator && <SpredOperator/>}
        { arrowFunc && <ArrowFunc/>}
        { destructuring && <Destructuring/>}
        { upgradebannerstatic && <UpgradeBannerStatic />}
        { upgradebanner && <UpgradeBanner />}
        {prComponent && <PureComponentSample/> }
      </div>
    );
  }
}

export default App;
