import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import CreateChargeIcon from "../../Assets/icons/CreateChargeIcon.svg";
import TableEditClientIcon from "../../Assets/icons/TableEditClientIcon.svg";
import TableDeleteClientIcon from "../../Assets/icons/TableDeleteClientIcon.svg";
import "./style.css";

function createData(idCharge, date, value, status, description) {
  return {
    idCharge,
    date,
    value,
    status,
    description
  };
}

const rows = [
  createData(
    "248563147",
    "26/01/2021",
    "R$ 500,00",
    0,
    "lorem ipsum  lorem ipsum lorem ipsuipsum lorem ips,,,",
  ),
  createData(
    "248563147",
    "26/01/2021",
    "R$ 500,00",
    1,
    "lorem ipsum  lorem ipsum lorem ipsuipsum lorem ips,,,",
  ),
  createData(
    "248563147",
    "26/01/2021",
    "R$ 500,00",
    0,
    "lorem ipsum  lorem ipsum lorem ipsuipsum lorem ips,,,",
  )
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "idCharge",
    numeric: true,
    label: "ID Cob.",
  },
  {
    id: "date",
    numeric: true,
    label: "Data de venc.",
  },
  {
    id: "value",
    numeric: true,
    label: "Valor",
  },
  {
    id: "status",
    numeric: true,
    label: "Status",
  },
  {
    id: "description",
    numeric: true,
    label: "Descrição",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          key={"editClient"}
        />
        <TableCell
          key={"deleteClient"}
        />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function TableClientDetails() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              /* numSelected={selected.length} */
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  /* const isItemSelected = isSelected(row.name); */

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.idCharge}
                    >
                      <TableCell
                        component="th"
                        id={index}
                        scope="row"
                        padding="none"
                      >
                        {row.idCharge}
                      </TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">{row.value}</TableCell>
                      <TableCell align="left">
                        {row.status ? (
                          <div className="table__statusDefaulter">
                            <h4>Vencida</h4>
                          </div>
                        ) : (
                          <div className="table__statusNonDefaulter">
                            <h4>Paga</h4>
                          </div>
                        )}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">
                        <div className="table__icon table__editClient">
                          <img
                            src={TableEditClientIcon}
                            alt="Editar cliente"
                            className="mb-4"
                          />
                          <h4>Editar</h4>
                        </div>
                      </TableCell>
                      <TableCell align="left">
                        <div className="table__icon table__deleteClient">
                          <img
                            src={TableDeleteClientIcon}
                            alt="Deletar cliente"
                            className="mb-4"
                          />
                          <h4>Excluir</h4>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 56 * emptyRows,
                  }}
                >
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
