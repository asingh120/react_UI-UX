import React, { useState } from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { makeStyles } from "@material-ui/core";
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

const burgerStyle = {
  background: "#fc6f5b",
  paddingLeft: "8px",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "left",
  flexDirection: "column",
  margin: 0,
  width: 220,
  boxSizing: "border-box"
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

const burgerLogoStyle = {
  fontFamily: "Nobel",
  color: "white",
  fontSize: 30,
  fontWeight: "700",
  background: "#fc6f5b"
};

const useStyle = makeStyles({
  linkStyle: {
    fontWeight: "100",
    color: "white",
    fontSize: 16,
    textDecoration: "none",
    margin: "0px 10px",
    "@media (max-width: 890px)": {
      display: "none"
    }
  },
  burger: {
    display: "none",
    cursor: "pointer",
    "@media (max-width: 890px)": {
      display: "flex",
      paddingRight: 20,
      color: "white",
      textDecoration: "none"
    }
  }
});

const Header = () => {
  const classes = useStyle();
  const [menu, setMenu] = useState(false);

  if (menu) {
    return (
      <div onClick={() => setMenu(false)}>
        <div style={burgerLogoStyle}>{account.accountName}</div>

        <div>
          <div style={burgerStyle}>
            <a
              href={"https://www.betterfin.com"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Accounts
            </a>

            <a
              href={"https://www.betterfin.com"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Lending Recommendations
            </a>

            <a
              href={"https://www.betterfin.com"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Investments
            </a>

            <a
              href={"https://www.betterfin.com"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Connect With An Advisor
            </a>

            <a
              href={"https://www.betterfin.com"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={headerStyles}>
      <div style={logoWrapper}>
        <div style={{ marginRight: 10 }}>{account.accountName}</div>
        <AccountBalanceIcon fontSize="medium" />
      </div>
      <div style={linkWrapper} onClick={() => setMenu(true)}>
        <a href={"https://www.betterfin.com"} className={classes.linkStyle}>
          Accounts
        </a>
        <a href={"https://www.betterfin.com"} className={classes.linkStyle}>
          Lending Recommendations
        </a>
        <a href={"https://www.betterfin.com"} className={classes.linkStyle}>
          Investments
        </a>
        <a href={"https://www.betterfin.com"} className={classes.linkStyle}>
          Connect With An Advisor
        </a>
        <a href={"https://www.betterfin.com"} className={classes.linkStyle}>
          Log Out
        </a>
        <div
          href={"https://www.betterfin.com"}
          className={classes.burger}
          onClick={() => setMenu(true)}
        >
          &#9776;
        </div>
      </div>
    </div>
  );
};

export default Header;
