import {CREATEROW} from "./src/createRow.js";
import {ROWS} from "./src/initialRows.js";
import {createHead} from "./src/createHead.js";


document.addEventListener("DOMContentLoaded", () => {
  createHead();
  CREATEROW(ROWS);
})