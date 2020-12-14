import React, { component } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("NIFTY 50"),
  createData("NIFTY Next 50"),
  createData("NIFTY BANK"),
  createData("NIFTY 100"),
  createData("NIFTY 500"),
  createData("SENSEX"),
  createData("BANKEX"),
  createData("BSE 100")
];

class fin extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="news">
        <p>
          <strong>
            <h2>
              international crude oil rates have crossed $50 a barrel for the
              first time
            </h2>
          </strong>
        </p>
        <div>
          <button className="up">
            <p>Petroleum, Metal</p>
            <img src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-4/128/power_v.2-512.png" />
          </button>
          <button className="down">
            <p> Travel</p>
            <img src="https://cdn1.iconfinder.com/data/icons/business-icon-set-3/128/power-512.png" />
          </button>
        </div>
        <br/>
        <a href=''>Next news</a>
        </div>
        <h2>Watch how your sector indices is performing </h2>
        <div>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Indices</TableCell>
                  <TableCell align="right">Value</TableCell>
                  <TableCell align="right">Prev-Close&nbsp;</TableCell>
                  <TableCell align="right">%Change&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.Value}</TableCell>
                    <TableCell align="right">{row.Prev_Close}</TableCell>
                    <TableCell align="right">{row.change}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
<h2>More features coming soon</h2>
      </div>
    );
  }
}
export default fin;
