import React, { useState, useEffect }from 'react';
import Data from './Data/data';
import Chart from './Components/chart';


import './App.css';

const App = () => {


    // const txData = require('./Data/data.json');
    // const response = fetch(txData);
    // const stuff = response.json;
    // console.log(stuff);
 

  console.log("what the fuck");

  return (
    <div className="App">
      <h1>Account Summary</h1>
      <ul>
        <li><Chart/></li>
        <li><Data/></li>
      </ul>


    </div>
  )
}

export default App;
