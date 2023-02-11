import { useCallback, useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const formatRowData = rowDataArr => {
  let formattedRows = []
  rowDataArr.forEach((rowValue, i) => {
    formattedRows.push({
      index: i,
      rowValue: rowValue
    })
  })
  return formattedRows
}

export default function TableComponent(props) {
  let rowData = props.values
  let formattedRowData = formatRowData(rowData);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entry</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedRowData.map((row) => (
            <TableRow
              key={row.index}
            >
              <TableCell component="th" scope="row">
                {row.index}
              </TableCell>
              <TableCell align="left">
                {row.rowValue}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}