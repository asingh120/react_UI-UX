import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import TransactionData from "../Data/data.json";

const account = TransactionData.accounts.account[0];

const headerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "bold",
  color: "#f3f3f3",
  background: "#fc6f5b",
  fontSize: 30,
  padding: "5px"
};

const linkStyle = {
  fontWeight: "100",
  color: "#f3f3f3",
  fontSize: 16,
  textDecoration: "none",
  margin: "0px 10px"
};

const logoWrapper = {
  fontFamily: "Nobel",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const linkWrapper = {
  display: "flex",
  alignItems: "center"
};

const Header = () => {
  return (
    <div style={headerStyles}>
      <div style={logoWrapper}>
        <div style={{ marginRight: 10 }}>{account.accountName}</div>
        <AccountBalanceIcon fontSize="medium" />
      </div>
      <div style={linkWrapper}>
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
        <a href={"https://www.betterfin.com"} style={linkStyle}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Header;
