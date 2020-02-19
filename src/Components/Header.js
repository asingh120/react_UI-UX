import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import TransactionData from "../Data/data.json";

const account = TransactionData.accounts.account[0];

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 25,
  paddingTop: 20,
  paddingRight: 25,
  fontFamily: "Nobel",
  fontWeight: "bold",
  color: "#f3f3f3",
  height: 65,
  background: "#fc6f5b",
  fontSize: 45,
  boxShadow: "3px 3px 2px #9E9E9E"
  //textShadow: "1.5px 1.5px 1.5px grey"
};

const buttonStyle = {
  height: "30px",
  width: "80px",
  marginRight: "20px",
  display: "table-cell",
  background: "#f54c4c",
  borderRadius: 10,
  color: "white"
};

const diamond = function(val) {
  return val + " &middot;";
};

const linkStyle = {
  fontFamily: "Arial",
  fontWeight: "100",
  color: "#f3f3f3",
  fontSize: 16
};

const Header = () => {
  return (
    <div style={headerStyles}>
      <div style={{ textShadow: "1.5px 1.5px 1.5px grey" }}>
        {account.accountName} {diamond}
        <AccountBalanceIcon fontSize="large" />
      </div>
      <a href={"https://www.betterfin.com"} style={linkStyle}>
        Accounts
      </a>
      <a href={"https://www.betterfin.com"} style={linkStyle}>
        Lending Recommendations
      </a>
      <a href={"https://www.betterfin.com"} style={linkStyle}>
        Investments
      </a>
      <a href={"https://www.betterfin.com"} style={linkStyle}>
        Connect With An Advisor
      </a>
      <button style={buttonStyle}>Log Out</button>
    </div>
  );
};

export default Header;
