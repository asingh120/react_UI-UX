import React from "react";
import TransactionData from "../Data/data.json";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Grid
} from "@material-ui/core";
import "../App.css";

const txs = TransactionData.trxs.transactions;

const columns = [
  {
    id: "transaction",
    label: "Transaction ID",
    minWidth: 100,
    align: "center"
  },
  { id: "date", label: "Date", minWidth: 75, align: "center" },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "basetype",
    label: "Base Type",
    minWidth: 100,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "type",
    label: "Type",
    minWidth: 100,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "center",
    format: value => value.toFixed(2)
  },
  {
    id: "balance",
    label: "Balance",
    minWidth: 100,
    align: "center",
    format: value => value.toFixed(2)
  }
];

const columnsBreakpoint = [
  { id: "date", label: "Date", minWidth: 75, align: "center" },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString()
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "center",
    format: value => value.toFixed(2)
  }
];

const formatType = type => {
  switch (type) {
    case "REFUND":
      return "Refund";
    case "OTHER_WITHDRAWALS":
      return "Other Withdrawals";
    case "TRANSFER":
      return "Transfer";
    case "PURCHASE":
      return "Purchase";
    case "DEPOSITS_CREDITS":
      return "Deposits/Credits";
    case "PAYMENT":
      return "Payment";
    default:
      return type;
  }
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const rows = [];

for (let i = 0; i < txs.length; i++) {
  rows.push({
    transaction: txs[i].id,
    date: txs[i].date,
    description: txs[i].description.simple,
    basetype: txs[i].baseType,
    type: formatType(txs[i].type),
    amount: formatter.format(txs[i].amount.amount),
    balance: formatter.format(txs[i].runningBalance.amount)
  });
}

const useStyles = makeStyles({
  root: {
    width: "99%",
    margin: "auto",
    "@media (max-width:955px)": {
      display: "none"
    }
    // fontFamily: "Apercu",
  },
  container: {
    //marginRight: "200"
    // maxHeight: 500
  },
  breakpoint: {
    "@media (min-width: 955px)": {
      display: "none",
      width: "80%",
      margin: "auto"
    }
    // "@media (min-width 955px)": {
    //   display: "none"
    // }
  }
});

const styles = {
  fontFamily: "Helvetica",
  fontSize: 25,
  color: "#636362",
  fontWeight: "600"
};

const StickyHeadTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table">
      <h2 style={styles}>Transaction History</h2>
      <Grid>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        background: "#f5d5d0"
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={classes.breakpoint}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columnsBreakpoint.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        background: "#f5d5d0"
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columnsBreakpoint.map(column => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default StickyHeadTable;
