import React from "react";
import TransactionData from "../Data/data.json";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";

const account = TransactionData.accounts.account[0];

const accountName = account.displayedName;
const accountType = account.accountType;
const currentBalance = account.currentBalance.amount;
const accountNumber = account.accountNumber;
const availableBalance = account.availableBalance.amount;
const isActive = account.accountStatus;
const lastUpdated = account.lastUpdated;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "auto",
    fontFamily: "Arial",
    color: "#3d3c3c",
    fontWeight: "400"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px",
    padding: "8px"
  },
  heading: {
    fontFamily: "sans-serif",
    fontSize: 25,
    color: "#636362",
    fontWeight: "600",
    padding: "5px"
  },
  innerDiv: {
    display: "flex",
    flexDirection: "column",

    textAlign: "left",
    padding: "5px"
  }
}));

const AccountInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.heading}>{accountName}</div>
        <div className={classes.innerDiv}>
          <p>Account: {accountType}</p>
          <p>Current Balance: ${currentBalance}</p>
          <p>Available Balance: ${availableBalance}</p>
        </div>
        <div className={classes.innerDiv}>
          <p>Account Number: {accountNumber}</p>
          <p>Account Status: {isActive}</p>
          <p>Updated: {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
