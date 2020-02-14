import React from 'react';
import TxData from '../Data/data.json';
import { PieChart, Pie } from 'recharts';

const data = TxData.transactions;

const amount = data.map((dataDetail, index) => {
    return (dataDetail.amount.amount);   
  });

const type =  data.map((dataDetail, index) => {
    return (dataDetail.type);
  });

const Chart = () => { 
  return(
    <div>
      <h3>This is a test of PieChart</h3>
      {console.log("this is amount ", amount)}
      {console.log("this is type " , type)}
      <PieChart width={730} height={250}>
        <Pie data={amount} dataKey="type" nameKey="amount" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={type} dataKey="type" nameKey="amount" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>
    </div>
  )
}

export default Chart;