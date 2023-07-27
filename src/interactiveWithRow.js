import { CREATEROW } from "./createRow.js";

export let changeRow = (arr) => {
  let deleteIcons = document.querySelectorAll('.icon-delete');
  deleteIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
      const rowWrapper = event.target.closest('.row-wrapper');
      console.log(rowWrapper.dataset.id);
      // rowWrapper.innerHTML = '';
      arr.splice(rowWrapper.dataset.id,1);
      CREATEROW(arr);
    })
  })
}