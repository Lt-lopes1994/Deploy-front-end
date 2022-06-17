import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import CreateChargeIcon from "../../Assets/icons/CreateChargeIcon.svg";
import api from "../../Services/api";
import "./style.css";

async function loadClients() { }

function createData(name, cpf, email, cellphone, status, createCharge) {
  return {
    name,
    cpf,
    email,
    cellphone,
    status,
    createCharge,
  };
}

const rows = [
  createData(
    "Sara da Silva",
    "054 365 255 87",
    "sarasilva@cubos.io",
    "71 9 9462 8654",
    0,
    1
  ),
  createData(
    "Cameron Williamson",
    "154 365 255 87",
    "cameronw@cubos.io",
    "71 9 9962 8658",
    0,
    1
  ),
  createData(
    "Savannah Nguyen",
    "054 365 255 87",
    "snguyen@cubos.io",
    "71 9 9762 8658",
    0,
    1
  ),
  createData(
    "Darlene Robertson",
    "254 365 255 87",
    "darlener@cubos.io",
    "71 9 9562 8653",
    0,
    1
  ),
  createData(
    "Marvin McKinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8658",
    0,
    1
  ),
  createData(
    "Sandra dos Santos",
    "000 365 255 87",
    "sandrasantos@cubos.io",
    "71 9 9762 8652",
    0,
    1
  ),
  createData(
    "Cameron Williamson",
    "054 365 255 87",
    "cameronw@cubos.io",
    "71 9 9662 8653",
    1,
    1
  ),
  createData(
    "Savannah Nguyen",
    "054 365 255 87",
    "snguyen@cubos.io",
    "71 9 9962 8659",
    1,
    1
  ),
  createData(
    "Darlene Robertson",
    "054 365 255 87",
    "darlener@cubos.io",
    "71 9 9862 8655",
    1,
    1
  ),
  createData(
    "Marvin McKinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9362 8652",
    1,
    1
  ),
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
    id: "name",
    numeric: false,
    label: "Cliente",
  },
  {
    id: "cpf",
    numeric: true,
    label: "CPF",
  },
  {
    id: "email",
    numeric: false,
    label: "E-mail",
  },
  {
    id: "cellphone",
    numeric: true,
    label: "Telefone",
  },
  {
    id: "status",
    numeric: true,
    label: "Status",
  },
  {
    id: "createCharge",
    numeric: true,
    label: "Criar Cobrança",
  },
];

function EnhancedTableHead(props, { query }) {
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
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function EnhancedTable() {
  const [clients, setClients] = React.useState([]);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  async function loadClients() {
    try {
      const response = await api.get("/customers");

      setClients(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    loadClients();
  }, []);

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

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      if (parseInt(query)) {
        handleRequestSort(null, "cpf");
        return data.filter((client) => client.cpf.includes(query));
      } else {
        handleRequestSort(null, "name");
        return data.filter((client) => client.name.toLowerCase().includes(query));
      }
    }
  };
  const rowsFiltered = filterData("", rows);


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
              {stableSort(clients, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((client, index) => {
                  /* const isItemSelected = isSelected(row.name); */

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={client.id}
                    >
                      <TableCell
                        component="th"
                        id={index}
                        scope="row"
                        padding="none"
                      >
                        {client.name}
                      </TableCell>
                      <TableCell align="left">{client.cpf}</TableCell>
                      <TableCell align="left">{client.email}</TableCell>
                      <TableCell align="left">{client.phone}</TableCell>
                      <TableCell align="left">
                        {client.status ? (
                          <div className="table__statusDefaulter">
                            <h4>Inadimplente</h4>
                          </div>
                        ) : (
                          <div className="table__statusNonDefaulter">
                            <h4>Em dia</h4>
                          </div>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <div className="table__createCharge">
                          <img src={CreateChargeIcon} alt="Criar cobrança" />
                          <h4>Cobrança</h4>
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
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 7, 10, 15, 20]}
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
