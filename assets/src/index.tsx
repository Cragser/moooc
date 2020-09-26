import React from "react";
import ReactDOM from "react-dom";
import ManageUsers from "./app/ManageUsers";
import "./styles/app.css";
import "normalize.css";
import 'materialize-css';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
const managerUserContainer = document.getElementById("ManageUsers");
if (managerUserContainer !== null) {
  ReactDOM.render(<ManageUsers></ManageUsers>, managerUserContainer);
}
const options = {}
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});


