import React from "react";
import Chart from "./Components/Chart";
import StickyHeadTable from "./Components/Table";
import AccountInfo from "./Components/AccountInfo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
  //flexDirection: "column",
  "@media (max-width: 955px)": {
    flexDirection: "column-reverse"
  }
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <div style={divStyle}>
          <div>
            <Chart />
          </div>
          <div>
            <AccountInfo />
          </div>
        </div>
        <div>
          <div style={{ height: 5 }} />
          <StickyHeadTable />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
