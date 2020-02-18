import React from "react";
import Chart from "./Components/Chart";
import StickyHeadTable from "./Components/Table";
import "./App.css";
import AccountInfo from "./Components/AccountInfo";

const App = () => {
  return (
    <div className="App">
      <h1>Account Summary</h1>
      <div>
        <p>
          <AccountInfo />
          <Chart />
        </p>
        <p>
          <StickyHeadTable />
        </p>
      </div>
    </div>
  );
};

export default App;
