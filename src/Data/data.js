import React from 'react';
import TxData from './data.json';


const trxs = TxData.trxs.transactions;

const trxsData = trxs.map((dataDetail, index) => {
  return (
    <ul key={dataDetail.id}>
      <li> 
        Transaction ID: {dataDetail.id}--,
        Amount: ${dataDetail.amount.amount}--,
        Basetype: {dataDetail.basetype}--,
        Category Type: {dataDetail.categoryType}--,
        Category ID: {dataDetail.categoryId}--,
        Category: {dataDetail.category}--,
        Detail Category ID: {dataDetail.detailCategoryId}-,
        Category Source: {dataDetail.categorySource}-,
        High Level Category ID: {dataDetail.highLevelCategoryId}--,
        Date Created: {dataDetail.createdDate}--,
        Last Updated: {dataDetail.lastUpdated}--,
        Description (Original): {dataDetail.description.original}--,
        Description (Simple): {dataDetail.description.simple}--,
        Type: {dataDetail.type}--,
        Sub-Type: {dataDetail.subType}--,
        Is Manual: {dataDetail.isManual}--,
        Source Type: {dataDetail.sourceType}--,
        Date: {dataDetail.date}--,
        Post Date: {dataDetail.postDate}--,
        Status: {dataDetail.status}--,
        Account ID: {dataDetail.accountId}--,
        Running Balance: ${dataDetail.runningBalance.amount}--,
        {dataDetail.merchant &&
        <li>
          Merchant ID: {dataDetail.merchant.id} 
        </li>
      }
        <hr/>
      </li>                   
    </ul>   
  )
})

const Data = () => {
  return (
    <div>
        {trxsData}
    </div>
  );
};

export default Data;