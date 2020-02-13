import React from 'react';
import TxData from './data.json';

const trsx = TxData.transactions;

const trsxData = trsx.map((dataDetail, index) => {
  return (
    <ul>
    <li> 
      {dataDetail.id}--,
      ${dataDetail.amount.amount}--,
      {dataDetail.basetype}--,
      {dataDetail.categoryType}--,
      {dataDetail.categoryId}--,
      {dataDetail.category}--,
      {dataDetail.detailCategoryId}-,
      {dataDetail.categorySource}-,
      {dataDetail.highLevelCategoryId}--,
      {dataDetail.createdDate}--,
      {dataDetail.lastUpdated}--,
      {dataDetail.description.original}--,
      {dataDetail.description.simple}--,
      {dataDetail.type}--,
      {dataDetail.subType}--,
      {dataDetail.isManual}--,
      {dataDetail.sourceType}--,
      {dataDetail.date}--,
      {dataDetail.postDate}--,
      {dataDetail.status}--,
      {dataDetail.accountId}--,
      ${dataDetail.runningBalance.amount}
      <br/>
      <br/>
      <hr/>
      {/* {dataDetail.merchant.id} */}
    </li>                   
  </ul>   
  )
})

const Data = () => {
  return (
    <div>
      <h1>Hello World</h1>
        {trsxData}
    </div>
  );
};

export default Data;


