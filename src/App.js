import React from 'react';
import Chart from './Components/chart';
import StickyHeadTable from './Components/table';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Account Summary</h1>
      <ul>
        <li><Chart/></li>
        <li><StickyHeadTable/></li>
      </ul>
    </div>
  )
}

export default App;
