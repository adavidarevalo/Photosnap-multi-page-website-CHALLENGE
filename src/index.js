import "./style.css";
import route from "./route/route"
import "./utils/infoMain.js";
//header
document.getElementById("buttonMenu").addEventListener("click", ()=>{
  document.querySelector("#headerNav").classList.toggle("display-None")
})

document.addEventListener("DOMContentLoaded", route)