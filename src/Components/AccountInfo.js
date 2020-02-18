import React from "react";
import TransactionData from "../Data/data.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    "& > *": {
      // margin: theme.spacing(1),
      // width: theme.spacing(200),
      // height: theme.spacing(50)
      margin: "auto",
      background: "#fcfcfc",
      width: "75%",
      height: 250,
      justifyContent: "center",
      fontFamily: "Arial",
      color: "#898b96",
      fontWeight: "400"
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: "50px",
    marginRight: "50px"
  },
  heading: {
    fontFamily: "Helvetica",
    fontSize: 25,
    color: "#636362",
    fontWeight: "600"
  }
}));

const AccountInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <p className={classes.heading}>Welcome back {accountName}!</p>
        <div className={classes.container}>
          <div>
            <p>Account: {accountType}</p>
            <p>Current Balance: ${currentBalance}</p>
            <p>Available Balance: ${availableBalance}</p>
          </div>
          <div>
            <p>Account Number: {accountNumber}</p>
            <p>Account Status: {isActive}</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AccountInfo;
