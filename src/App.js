import React from "react";
import Chart from "./Components/Chart";
import StickyHeadTable from "./Components/Table";
import AccountInfo from "./Components/AccountInfo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <p>
          <AccountInfo />
          <Chart />
        </p>
        <p>
          <StickyHeadTable />
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default App;
