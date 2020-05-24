import React from "react";
//import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import DataTable from "./components/DataTable";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <DataTable />
      </Container>
    </React.Fragment>
  );
}

export default App;
