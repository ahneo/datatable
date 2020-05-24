import React from "react";
//import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./data/test.json";
import Button from "@material-ui/core/Button";
import SimpleTable from "./components/SimpleTable";
import DataTable from "./components/DataTable";
import { Container } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <DataTable />
        <div>
          {data.map((element) => {
            return <div>{element._id}</div>;
          })}
        </div>
      </Container>
    </React.Fragment>
  );
  // return (
  //   <div>
  //     {data.map((element) => {
  //       return <div>{element._id}</div>;
  //     })}
  //   </div>
  // );
}

export default App;
