import React from "react";
import Chart from "./Components/Chart";
import StickyHeadTable from "./Components/Table";
import AccountInfo from "./Components/AccountInfo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { makeStyles } from "@material-ui/core";
import "./App.css";

const useStyle = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  breakpoint: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 955px)": {
      display: "flex",

      flexDirection: "column"
    }
  }
});

const App = () => {
  const classes = useStyle();
  return (
    <div
      className="App"
      style={{ position: "absolute", bottom: 0, width: "100%" }}
    >
      <Header />
      <div style={{ width: "100%" }}>
        <div className={classes.root}>
          <div className={classes.breakpoint}>
            <div>
              <AccountInfo />
            </div>

            <div>
              <Chart />
            </div>
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
