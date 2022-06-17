import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";

export default function TableHome({ titles, dataTable }) {
  function createData(client, specifications, value) {
    return { client, specifications, value };
  }

  const rows = [];
  dataTable.map((data) => {
    return rows.push(createData(...data));
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>{titles[0]}</TableCell>
            <TableCell>{titles[1]}</TableCell>
            <TableCell>{titles[2]}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.specifications}>
              <TableCell component="th">{row.client}</TableCell>
              <TableCell>{row.specifications}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
