import "./styles/app.css";
import "normalize.css";
import "materialize-css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const options = {};
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});
console.log('public')