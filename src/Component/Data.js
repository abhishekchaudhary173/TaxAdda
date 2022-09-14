import React from "react";
// import { getImageMeta } from "./MockApi";
// import axios from "axios";
import "./Data.css";
import { useNavigate } from "react-router-dom";
import { Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from "@material-ui/core";

const columns = [
  { id: "name", label: "LEGAL NAME", minWidth: 100 },
  { id: "trade", label: "TRADE NAME", minWidth: 80 },
  {
    id: "gst_no",
    label: "GST NUMBER",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "gst_type",
    label: "GST TYPE)",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "registration",
    label: "REGISTRATION DATE",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "cancellation",
    label: "CANCELLATION DATE",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "delete",
    label: "DELETE",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  name,
  trade,
  gst_no,
  gst_type,
  registration,
  cancellation,
  image
) {
  return { name, trade, gst_no, gst_type, registration, cancellation, image };
}

const rows = [
  createData(
    "Aakritibuildmart Private Limited",
    "Aakriti Buildmart Private Limited",
    "08AAHCA3030C1ZB",
    "Regular",
    "24/01/2018",
    "-"
  ),
  createData(
    "Aamir Anish Ghanchi",
    "True Blue Enterprises",
    "24CSHPG7194N2Z4",
    "Regular",
    "25/10/2019",
    "-"
  ),
  createData(
    "Arneda Creations Private Limited",
    "Arneda Creations Private Limited",
    "06AAOCA5327M1ZB",
    "Regular",
    "15/01/2020",
    "28/01/2021"
  ),
  createData(
    "Ab Plus Tv Foundation",
    "Ab Plus Tv Foundation",
    "08AATCA9154F1Z8",
    "Composition",
    "19/09/2020",
    "-"
  ),
  createData(
    "Abhimanyu Tandon",
    "Heybroh Online Retail",
    "29AGZPT1866G2ZE",
    "Regular",
    "25/08/2017",
    "-"
  ),
  createData(
    "Abhinav Kumar Yadav",
    "Createyourtaste",
    "09AMFPY9613E1ZM",
    "Regular",
    "13/10/2020",
    "-"
  ),
  createData(
    "Abhishek Singh",
    "Vibrant Cars",
    "24CHZPS0340F1Z5",
    "Regular",
    "01/07/2017",
    "-"
  ),
  createData(
    "Abhishek Adhikari",
    "Aurick Consulting",
    "09AIKPA2151L1ZB",
    "Regular",
    "25/11/2021",
    "-"
  ),
];

const Data = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  //   const [state, setState] = useState("");

  //   const data = async () => {
  //     const response = await getImageMeta();
  //     console.log("json", response);
  // response
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log("json", json);
  //     // this.setState({
  //     //   items: json,
  //     //   DataisLoaded: true,
  //     // });
  //   });

  // axios.get(obj).then((response) => {
  //   setState(response.data.results);
  //     // });
  //   };
  //   useEffect(() => {
  //     data();
  //   }, []);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div>
        {/* <header className="navbar"></header> */}
        <div className="split-container">
          <div className="split-left">
            <div className="heading">
              <img
                className="logo"
                alt="logo"
                src="https://taxadda.com/wp-content/uploads/TaxAdda-210-x-48.png"
                onClick={handleClick}
              />
            </div>
            <div className="sidebar">
              <p className="sidebar-items">GSTIN List</p>
              <p className="sidebar-items">Return Status</p>
              <p className="sidebar-items">QRMP</p>
              <p className="sidebar-items">Tags</p>
            </div>
          </div>
          <div className="split-right">
            <div className="btn-div">
              <button className="manage-btn">Manage Subscription</button>
            </div>
            <div className="child-container1">
              <div className="parent">
                <div>
                  <h4>All GSTINs</h4>
                </div>
                <div>
                  <span className="btn-div2">
                    <button className="add-btn">Add GSTIN</button>
                    <input
                      className="search"
                      placeholder="Search by Legal Name,Trade Name or GSTIN"
                    ></input>
                    <button className="export-btn">Export as XLSX</button>
                  </span>
                </div>
              </div>
              <div style={{ maxHeight: "70vh", overflow: "scroll" }}>
                <Paper sx={{ width: "50%" }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ top: 10, minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
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
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            </div>
          </div>
        </div>

        {/* <footer className="footer">
          <p></p>
        </footer> */}
      </div>
    </>
  );
};

export default Data;
