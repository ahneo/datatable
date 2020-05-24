import React from "react";
//import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./data/test.json";
import Button from "@material-ui/core/Button";
import SimpleTable from "./components/SimpleTable";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SimpleTable />
      <div>
        {data.map((element) => {
          return <div>{element._id}</div>;
        })}
      </div>
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
