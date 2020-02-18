import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import TransactionData from "../Data/data.json";

const useStyles = makeStyles({
  title: {
    color: "red"
  },
  formControl: {
    margin: 20,
    minWidth: 120
  },
  graphWrapper: {
    width: "100%",
    justifyContent: "center",
    display: "flex"
  }
});

const balance = TransactionData.balances[0];
const dailyLabels = balance.daily_labels;
const dailyValues = balance.daily_values;
const weekLabels = balance.day_of_week_labels;
const weekValues = balance.day_of_week_average_values;
const monthLabels = balance.month_labels;
const monthValues = balance.month_average_values;
const final = [];
const weekFinal = [];
const monthFinal = [];

for (let i = 0; i < dailyValues.length; i++) {
  final.push({
    date: dailyLabels[i],
    amount: dailyValues[i]
  });
}

for (let i = 0; i < monthLabels.length; i++) {
  monthFinal.push({
    month: monthLabels[i],
    amount: monthValues[i]
  });
}

for (let i = 0; i < weekLabels.length; i++) {
  weekFinal.push({
    day: weekLabels[i],
    amount: weekValues[i]
  });
}

const Chart = () => {
  const classes = useStyles();
  const [graph, setGraph] = useState("bar");

  const renderGraph = () => {
    if (graph === "line") {
      return (
        <LineChart
          width={730}
          height={250}
          data={monthFinal}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="amount" />
          <Tooltip />
          <Line type="monotone" dataKey="month" stroke="#8884d8" />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      );
    } else if (graph === "radar") {
      return (
        <RadarChart outerRadius={90} width={730} height={250} data={weekFinal}>
          <PolarGrid />
          <PolarAngleAxis dataKey="day" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="day"
            dataKey="amount"
            stroke="#19bcf7"
            fill="#19bcf7"
            fillOpacity={0.6}
          />
        </RadarChart>
      );
    } else {
      return (
        <BarChart width={730} height={250} data={final}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="amount" />
          <Tooltip />
          <Bar dataKey="date" fill="#8884d8" />
          <Bar dataKey="amount" fill="#5aad11" />
        </BarChart>
      );
    }
  };

  const handleChange = e => {
    setGraph(e.target.value);
  };

  return (
    <div>
      <h3 className={classes.title}>Account At A Glance</h3>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Charts</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={graph}
            onChange={handleChange}
          >
            <MenuItem value={"bar"}>Bar</MenuItem>
            <MenuItem value={"line"}>Line</MenuItem>
            <MenuItem value={"radar"}>Radar</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.graphWrapper}>{renderGraph()}</div>
    </div>
  );
};

export default Chart;