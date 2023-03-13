import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";
// import 'font-awesome/css/font-awesome.min.css';
// import 'mdbootstrap/css/mdb.min.css';
// import 'mdbootstrap/js/mdb.min.js';
import App from "./App";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);



