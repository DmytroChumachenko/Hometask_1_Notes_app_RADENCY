import {CREATEROW} from "./src/createRow.js";
import {ROWS} from "./src/initialRows.js";
import {createHead} from "./src/createHead.js";
import { toListenROws } from "./src/workWithRows.js";

document.addEventListener("DOMContentLoaded", () => {
  createHead();
  CREATEROW(ROWS);
  toListenROws();
})