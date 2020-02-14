import React from 'react';
import Data from './Data/data';
import Chart from './Components/chart';


import './App.css';

const App = () => {
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
