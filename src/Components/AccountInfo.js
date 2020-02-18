import React from "react";
import TransactionData from "../Data/data.json";

const account = TransactionData.accounts.account[0];

const bankName = account.accountName;
const accountName = account.displayedName;
const accountType = account.accountType;
const currentBalance = account.currentBalance.amount;
const accountNumber = account.accountNumber;
const availableBalance = account.availableBalance.amount;
const isActive = account.accountStatus;
const lastUpdated = account.lastUpdated;

const AccountInfo = () => {
  return (
    <div>
      <div>Welcome back {accountName}!</div>
      <div>{bankName}</div>
      <div>Account: {accountType}</div>
      <div>Account Number: {accountNumber}</div>
      <div>Current Balance: ${currentBalance}</div>
      <div>Available Balance: ${availableBalance}</div>
      <div>Account Status: {isActive}</div>
      <div>Last Updated: {lastUpdated}</div>
    </div>
  );
};

export default AccountInfo;
